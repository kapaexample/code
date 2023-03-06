import express from 'express';
import controllerPage from '../controller/controllerPage';

let router = express.Router();

let initWebRoutes = (app) =>{
  router.get('/',controllerPage.getFormPage);
router.post('/post-crud', controllerPage.getPostCRUD);
    router.get('/info',controllerPage.getDisplay);

    app.use('/', router);
}






module.exports = initWebRoutes;