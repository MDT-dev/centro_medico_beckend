import { Request, Response } from "express";

export class LogoutController {
  async handle(req: Request, res: Response) {
    res.clearCookie("auth_token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });
    return res.json({ message: "Logged out successfully" });
  }
}
