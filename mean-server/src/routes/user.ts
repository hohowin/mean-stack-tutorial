import { Router, Request, Response, NextFunction } from "express";
import UserModel from "../schemas/user";
import bcrypt from "bcrypt";

const router = Router();

router.post(
  "/signup",
  (req: Request, res: Response, _next: NextFunction): void => {
    bcrypt.hash(req.body.password, 10).then((hash) => {
      const user = new UserModel({
        email: req.body.email,
        password: hash,
      });
      user
        .save()
        .then((result) => {
          res.status(201).json({
            message: "User created successfully",
            result: result,
          });
        })
        .catch((err) => {
          res.status(500).json({
            error: err,
          });
        });
    });
  }
);

export default router;
