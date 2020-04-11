import User from '../models/User';
import UserModel from '../models/User';
import { Request, Response } from 'express';

const signupController = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (
    await UserModel.findOne({
      username
    })
  ) {
    return res.status(400).json({
      username: 'User with that username already exists.'
    });
  }

  const newUser = new UserModel({
    username: username,
    password: password
  });

  return res.json(newUser.save());
};

export default signupController;
