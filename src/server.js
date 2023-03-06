import express from 'express';
import bodyParser from 'body-parser';
import viewEngine from './config/viewEngine';
import initWebRoutes from './route/web.js';
require('dotenv').config();
import connectionDB from './connectDB';

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
let port = process.env.PORT || 6969;

viewEngine(app);
initWebRoutes(app);
connectionDB();

app.listen(port, ()=>{
    console.log('Server listening on port: ' + port);
})