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
        secure: true,
        sameSite: "none",
        maxAge: 24 * 60 * 60 * 1000,
        path: "/",
      });

      // SessionController.ts
      return res.json({
        message: "Login successful",
        user,
        token, // Envie o token explicitamente aqui
      });
    } catch (err) {
      next(err);
    }
  }
}
