import { Router, Request, Response, NextFunction } from 'express';
import checkAuth from '../middlewares/check-auth';
import { Post } from 'src/models/post.model';
import PostModel from '../schemas/post';

const router = Router();

router.get('', (req: Request, res: Response, _next: NextFunction): void => {
    const pageSize = req.query.pagesize ? +req.query.pagesize : null;
    const currentPage = req.query.page ? +req.query.page : null;
    const postQuery = PostModel.find();
    let fetchedPosts: Post[];
    if (pageSize && currentPage) {
        postQuery
        .skip(pageSize * (currentPage - 1))
        .limit(pageSize);
    }

    postQuery
    .then(documents => {
        fetchedPosts = documents;
        return PostModel.count();
    })
    .then(count => {
        res.status(200).json({
            message: 'Post fetched successfully!',
            posts: fetchedPosts,
            maxPosts: count
        });
    });
});

router.post("", 
    checkAuth,
    (req: Request, res: Response, _next: NextFunction): void => {
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

router.put("/:id", 
    checkAuth,
    (req: Request, res: Response, _next: NextFunction): void => {
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

router.delete("/:id", 
    checkAuth,
    (req: Request, res: Response, _next: NextFunction): void => {
    PostModel.deleteOne({_id: req.params.id})
        .then( result => {
            console.log(result);
            res.status(200).json({
                message: 'Post deleted successfully'
            });
        });
});

export default router;