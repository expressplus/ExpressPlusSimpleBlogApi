import  { Router } from '@ulvimemmeedov/expressjsplus';
import { homeController } from "../controllers/home";

Router.get('/',(req,res,next)=>homeController.Home(req,res,next));

Router.get('/posts/',(req,res,next)=>homeController.Posts(req,res,next));

Router.post('/post/create',(req,res,next)=>homeController.CreatePost(req,res,next));

export default Router;

