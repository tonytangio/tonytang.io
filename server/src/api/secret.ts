import { Request, Response } from 'express';

const secretController = (req: Request, res: Response) => { 
  if (req.username === 'admin') 
    return res.send('Secret: hunter3');

  return res.status(401).send('You\'re not the admin!');
};

export default secretController;