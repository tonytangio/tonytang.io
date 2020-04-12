import User, { UserModel } from '../models/User';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import keys from '../secret/keys';

const loginController = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const user: User = await UserModel.findOne({
    username
  }) as unknown as User;
  if (!user) {
    return res.status(400).send({
      error: 'There isn\'t a user with that username.' 
    });
  }

  if (password !== user.password) {
    return res.status(400).send({
      error: 'Incorrect password entered.' 
    }); 
  }

  // Passwords match - user is authentic
  const payload = {
    id: user.id,
    name: user.username
  };

  jwt.sign(payload, keys.jwtStrategy, {
    expiresIn: 31556926 // 1 year in seconds
  }, (error, token) => {
    return res.json({
      success: true,
      token: 'Bearer ' + token
    });
  });
};

export default loginController;
