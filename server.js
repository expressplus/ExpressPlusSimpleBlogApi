import { Service,Logger,Helmet,Cors,JsonParser } from '@ulvimemmeedov/expressjsplus';
import { conn } from "./db/database.js";
import Router from './router/route.js';

const port = 5000;
conn();

Service
    .use(Helmet())
    .use(Cors())
    .use(JsonParser())
    .use(Logger('dev'))
    .use(Router)
    .listen( port, ()=> console.log('app running port ' + port))
