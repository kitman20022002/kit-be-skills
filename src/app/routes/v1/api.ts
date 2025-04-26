import express, { Request, Response } from 'express';
import * as siteMapController from '../../controllers/v1/sitemapController';
import * as conceptController from '../../controllers/v1/conceptController';
import * as typesController from '../../controllers/v1/typesController';
import * as blogController from '../../controllers/v1/blogController';

const router = express.Router();

router.get('/up', (req: Request, res: Response) => {
  res.sendStatus(200);
});
router.get('/types', typesController.index);
router.get('/types/:slug', typesController.show);
router.get('/category/:category/stack/:stack/types/:slug', conceptController.index);
router.get('/posts/sitemap', siteMapController.index);
router.get('/website/blogs', blogController.index);

module.exports = router;
