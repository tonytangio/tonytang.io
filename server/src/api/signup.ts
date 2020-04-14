import { UserModel } from '../models/User';
import { Request, Response } from 'express';

const signupController = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  if (
    await UserModel.findOne({
      username
    })
  ) {
    return res.status(400).send({
      error: 'User with that username already exists.' 
    });
  }

  const newUser = new UserModel({
    username,
    password
  });

  newUser.save();
  res.send(`User ${username} created!`);
};

export default signupController;
