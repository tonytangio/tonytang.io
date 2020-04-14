import { Request, Response } from 'express';
import Blog, { BlogModel } from '../models/Blog';
import stringify from 'json-stringify-safe';

const getBlogController = async (req: Request, res: Response) => {
  let blog = null;  
  try {
    blog = await BlogModel.findOne({
    }, {
    }, {
      sort: {
        'date': -1
      }
    });
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }

  res.json(blog);
};

export default getBlogController;
