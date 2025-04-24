import { Request, Response } from 'express';
import express from 'express';
import { logger } from '../../../loaders/logger';
import { NextFunction } from 'express';
import * as siteMapController from '../../controllers/v1/sitemapController';
import * as conceptController from '../../controllers/v1/conceptController';
import * as typesController from '../../controllers/v1/typesController';
import * as blogController from '../../controllers/v1/blogController';

const router = express.Router();

// function asyncMiddleware(fn: any) {
//   return (req: Request, res: Response, next: NextFunction) => {
//     Promise.resolve(fn(req, res, next)).catch((e) => {
//       console.error(e.message);
//       logger.error(e.message);
//       next();
//     });
//   };
// }

// router.use((req: Request, res: Response, next: NextFunction) => {
//   try {
//     for (const layer of router.stack) {
//       if (layer.route) {
//         for (const method in layer.route.methods) {
//           if (layer.route.methods[method]) {
//             layer.route.methods[method] = asyncMiddleware(layer.route.methods[method]);
//           }
//         }
//       }
//     }
//     next();
//   } catch (e) {
//     console.error('fxx i');
//   }
// });

router.get('/up', (req: Request, res: Response) => {
  res.sendStatus(200);
});
router.get('/types', typesController.index);
router.get('/types/:slug', typesController.show);
router.get('/category/:category/stack/:stack/types/:slug', conceptController.index);
router.get('/posts/sitemap', siteMapController.index);
router.get('/website/blogs', blogController.index);

module.exports = router;
