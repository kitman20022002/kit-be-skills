import { root } from '../../database/seeders/seedPost';
import { camelToKebabCase } from '../../utils/urlUtils';
import { Request, Response } from 'express';

export const index = (req: Request, res: Response) => {
  const posts: string[] = [];

  Object.keys(root).forEach((item) => {
    Object.keys((root as any)[item]).forEach((stack: any) => {
      Object.keys((root as any)[item][stack].items).forEach((concept: any) => {
        const url = `${camelToKebabCase(item)}/${stack}/${concept}`;
        posts.push(url);
      });
    });
  });

  res.send([...posts]);
};
