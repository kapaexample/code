import express from 'express';
import controllerPage from '../controller/controllerPage';

let router = express.Router();

let initWebRoutes = (app) =>{
  /* command get page */
  router.get('/createnewuser',controllerPage.getForm);
  /* command info to SQL */
  router.post('/post-crud', controllerPage.getPostCRUD);
/* creat edit */
  router.get('/edit-crud',controllerPage.getEditCRUD);
    app.use('/', router);
}






module.exports = initWebRoutes;