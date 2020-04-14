import { Request, Response } from 'express';
import { BlogModel } from '../models/Blog';

const makeBlogController = async (req: Request, res: Response) => {
  // console.log(JSON.stringify(req.body));
  const { title, content } = req.body;

  const date = new Date();
  const newBlog = new BlogModel({
    title,
    content,
    date
  });

  await newBlog.save();
  res.send(`Blog ${title} created!`);
};

export default makeBlogController;
