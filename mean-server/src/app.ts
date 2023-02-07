import express, { Express, Request, Response, NextFunction } from 'express';
import { Post } from './models/post.model';

export const app: Express = express();

app.use((_: Request, res: Response, next: NextFunction) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Header',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.setHeader(
        'Access-Control-Allow-Methods', 
        'GET, POST, PUT, PATCH, DELETE, OPTIONS'
    );
    next();
});

app.use('/api/posts',(_req: Request, res: Response, _next: NextFunction) => {
    const posts: Post[] = [
        {id: '1', title: 'Server Side Post 1', content: 'This is coming from the server.'},
        {id: '2', title: 'Server Side Post 2', content: 'This is coming from the server.'},
        {id: '3', title: 'Server Side Post 3', content: 'This is coming from the server.'},
        {id: '4', title: 'Server Side Post 4', content: 'This is coming from the server.'},
        {id: '5', title: 'Server Side Post 5', content: 'This is coming from the server.'},
        {id: '6', title: 'Server Side Post 6', content: 'This is coming from the server.'},
    ];

    res.status(200).json({
        message: 'Post fetched successfully!',
        posts: posts
    });
});
