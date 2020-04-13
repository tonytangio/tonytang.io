import User, { UserModel } from '../models/User';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import keys from '../secret/keys';

const loginController = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  console.log(`${JSON.stringify(req.body)}`);
  const user: User = await UserModel.findOne({
    username,
    password
  }) as unknown as User;
  if (!user) {
    return res.status(400).send({
      error: 'Incorrect login details.' 
    });
  }
  console.log('User: ' + JSON.stringify(user));

  // if (password !== user.password) {
  //   return res.status(400).send({
  //     error: 'Incorrect password entered.' 
  //   }); 
  // }

  // Passwords match - user is authentic
  const payload = {
    id: user.id,
    username: user.username
  };

  jwt.sign(payload, keys.jwtStrategy, {
    expiresIn: 31556926 // 1 year in seconds
  }, (error, token) => {
    return res.json({
      success: true,
      username: user.username,
      token
    });
  });
};

export default loginController;
