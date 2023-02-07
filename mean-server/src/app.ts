import express, { Express, Request, Response } from 'express';

export const app: Express = express();

app.use('/api/posts',(_req: Request, res: Response, _next) => {
    const posts: {id: string, title: string, content: string}[] = [
        {id: '1', title: 'Server Side Post 1', content: 'This is coming from the server.'},
        {id: '2', title: 'Server Side Post 2', content: 'This is coming from the server.'},
        {id: '3', title: 'Server Side Post 3', content: 'This is coming from the server.'},
        {id: '4', title: 'Server Side Post 4', content: 'This is coming from the server.'},
        {id: '5', title: 'Server Side Post 5', content: 'This is coming from the server.'},
        {id: '6', title: 'Server Side Post 6', content: 'This is coming from the server.'},
    ];
    res.status(200).json(posts);
});
