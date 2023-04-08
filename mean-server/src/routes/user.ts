import { Router, Request, Response, NextFunction } from "express";
import UserModel, { IUser } from "../schemas/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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

router.post('/login', async (req: Request, res: Response) => {
  try {

    const user: IUser | null = await UserModel.findOne({ email: req.body.email });
    if (!user) {
      res.status(401).json({
        message: 'User does not exist'
      });
      return;
    }

    const passwordMatches: boolean = await bcrypt.compare(req.body.password, user.password);
    if (!passwordMatches) {
      res.status(401).json({
        message: 'Incorrect password'
      });
      return;
    }

    const token: string = jwt.sign(
      { email: user.email, userId: user._id },
      'secret_this_should_be_longer',
      { expiresIn: '1h' }
    );

    res.status(200).json({ token: token });

  } catch (error) {
    res.status(401).json({
      message: `Authentication failed: ${error.message}`
    });
  }
});

export default router;
