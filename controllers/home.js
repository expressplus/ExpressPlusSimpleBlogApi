import { AsyncHandler } from "@ulvimemmeedov/expressjsplus/src/ExceptionHandler/Handler";

import { Posts } from "../model/posts";

class Home {

    Home = ( req,res ) => {

        res.status(200).json({

            message:'this is Express+'

        })

    };
    Posts = AsyncHandler( async ( req,res ) =>{

        const posts = await Posts.find({})

        if (!posts){

            res.status(200).json({

                success:false,
                posts:"cannot find posts"

            })

        }else {

        res.status(200).json({

            success:true,
            posts:posts

        })
        }
    })
    CreatePost = AsyncHandler( async ( req,res ) => {

        const { title,author,body } = req.body;

        if ( !title || !author || !body){

            res.status(200).json({

                success:false,
                message:"title author body field required"

            })

        }else {

        const post = await Posts.create({
            title,
            author,
            body
        });

        if (!post) {

            res.status(500).json({

                success:false,
                post:"server error"

            })

        }else {

            res.status(200).json({
                
                success:true,
                post:post

            })

        }

        }
    });
};

export const homeController = new Home();
