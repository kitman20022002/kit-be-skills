import { Request, Response, NextFunction } from 'express';
const jwt = require('jsonwebtoken');
import User from '../model/user';
const status = require('http-status');
const logger = require('../../loaders/logger');
const config = require('../../app/config/app');
declare module 'express-serve-static-core' {
  interface Request {
    verifyEmail?: string;
  }
}

const authenticationEmailTokenMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.params.verifyEmail;
  if (!config || !config.emailSecret) {
    logger.error('Missing email secret in env');
    res.status(status.FORBIDDEN).send();
  }
  jwt.verify(token, config.emailSecret, async (err: Error) => {
    if (err) return res.status(status.FORBIDDEN).send();
    const { email, activeCode } = jwt.verify(token, config.emailSecret);
    const user = await User.getModel(req.dbConnection).findOne({ email, activeCode }).exec();
    if (user && !user.active) {
      req.verifyEmail = email;
      return next();
    }
    logger.info(email + 'activation code incorrect. User input ' + activeCode);
    res.status(status.FORBIDDEN).send();
  });
};

module.exports = { authenticationEmailTokenMiddleware };
