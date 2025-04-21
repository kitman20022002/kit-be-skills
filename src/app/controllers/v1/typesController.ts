import { Request, Response } from 'express';
import { capitalizeFirstLetter } from '../../utils/helper';
import { getStacksByCategory, root } from '../../database/seeders/seedPost';
import { POST_STATUS } from '../../enum/post';

const getStatus = (status: string | undefined, description: string) => {
  if (status) {
    return status;
  }
  if (!description) {
    return POST_STATUS.IN_PROGRESS;
  }
  return POST_STATUS.DONE;
};

const convertItem = (items: any) => {
  return Object.keys(items).map((item: any) => {
    const slug = item.toLowerCase().replace(/ /g, '-');
    const updateItem = {
      name: items[item]?.name ?? capitalizeFirstLetter(item.toLowerCase()).replace('-', ' '),
      slug,
      status: getStatus(items[item].status, items[item].description),
    };
    return updateItem;
  });
};

export const index = async (req: Request, res: Response) => {
  res.send(root);
};

export const show = async (req: Request, res: Response) => {
  const { slug } = req.params;
  if (!slug) {
    return res.send([]);
  }

  const stacks = getStacksByCategory(slug);
  if (!stacks) {
    res.send([]);
  }
  const data = Object.keys(stacks as any).map((stack: any, idx: any) => {
    return {
      id: idx,
      name: (stacks as any)[stack].name,
      items: convertItem((stacks as any)[stack].items),
    };
  });

  res.send(data);
};
