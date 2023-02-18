import express, { Express } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import postRoutes from './routes/posts';

//const postRoutes = require("src/routes/posts");


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

app.use("/api/posts", postRoutes);