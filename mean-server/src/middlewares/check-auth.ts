import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const checkAuth = (req: Request, res: Response, next: NextFunction): void => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        jwt.verify(token ? token : "", "secret_this_should_be_longer");
        next();
    } catch (error) {
        res.status(401).json({
            message: "Auth failed!"
        });
    }

};

export default checkAuth;