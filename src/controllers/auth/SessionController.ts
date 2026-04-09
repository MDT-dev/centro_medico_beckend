import { NextFunction, Request, Response } from "express";
import { SessionService } from "../../services/auth/SessionService";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export class SessionController {
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      const sessionService = new SessionService();
      const { token, user } = await sessionService.execute({ email, password });

      res.cookie("auth_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 24 * 60 * 60 * 1000,
        path: "/"
      });

      return res.json({ message: "Login successful", user });
    } catch (err) {
      next(err);
    }
  }

}

