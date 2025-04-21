import { Request, Response } from 'express';
import { reactCoreConcepts } from '../../database/seed/react-core';

export const index = (req: Request, res: Response) => {
  res.send(reactCoreConcepts);
};
