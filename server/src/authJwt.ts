import jwt from 'jsonwebtoken';
import keys from './secret/keys';
import { Request, Response, NextFunction } from 'express';

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['x-access-token'];
  console.log(`in verifyToken ${token}`);
  if (!token) {return res.status(403).send({
    message: 'No JWT token provided.' 
  });}

  
  jwt.verify(token as string, keys.jwtStrategy, (error: any, decoded: any) => {
    console.log(`Verify error: ${error}`);
    if (error) {
      return res.status(401).send({
        message: 'Unauthorized.' 
      });
    }
    
    req.username = decoded.username;
    console.log(`Decoded: ${req.username}`);
    next();
  });
};