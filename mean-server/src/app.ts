import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { Post } from './models/post.model';

const PostModel:  mongoose.Model<Post>  = require('./schemas/post');

export const app: Express = express();

mongoose.connect("mongodb://peter:Parker@127.0.0.1:27017/mean-app?retryWrites=true")
    .then(() => {
        console.log('Connected to Mongo!');
    })
    .catch((err) => {
        console.log('Failed to connect to Mongo!', err);
    });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use((_: Request, res: Response, next: NextFunction) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader(
//         'Access-Control-Allow-Headers',
//         'Origin, X-Requested-With, Content-Type, Accept'
//     );
//     res.setHeader(
//         'Access-Control-Allow-Methods', 
//         'GET, POST, PUT, PATCH, DELETE, OPTIONS'
//     );
//     next();
// });

app.use(cors());

app.get('/api/posts', (_req: Request, res: Response, _next: NextFunction) => {
    PostModel.find().then((data: Post[]) => {
        res.status(200).json({
            message: 'Post fetched successfully!',
            posts: data
        });
    });
});

app.post("/api/posts", (req: Request, res: Response, _next: NextFunction) => {
    const post = new PostModel({
        title: req.body.title,
        content: req.body.content
    });
    post.save().then(createdPost => {
        res.status(201).json({
            message: 'Post added successfully',
            postId: createdPost._id
        });
    });
});

app.put("/api/posts/:id", (req: Request, res: Response, _next: NextFunction) => {
    const post = {
//        _id: req.body.id,
        title: req.body.title,
        content: req.body.content
    };
    PostModel.updateOne({_id: req.params.id}, post)
    .then( result => {
        console.log(result);
        res.status(200).json({
            message: 'Post updated successfully'
        });
    });
});

app.delete("/api/posts/:id", (req: Request, res: Response, _next: NextFunction) => {
    PostModel.deleteOne({_id: req.params.id})
        .then( result => {
            console.log(result);
            res.status(200).json({
                message: 'Post deleted successfully'
            });
        });
});