import express, { Express, Request, Response } from 'express';

export const app: Express = express();

app.use((_req: Request, _res: Response, next) => {
    console.log('First middleware');
    next();
});

app.use((_req: Request, res: Response, _next) => {
    res.send('Hello from express');
});