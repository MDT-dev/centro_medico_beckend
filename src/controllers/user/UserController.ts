import { NextFunction, Request, Response } from "express";
import { ChangePasswordService, CheckEmailService, CreateUserService, GetAllUsersService, GetUserService, UpdateUserService } from "../../services/user/user-service";


export class UserController {
  
  async createUser(request: Request, response: Response, next: NextFunction) {
    try {
      const { firstName, lastName, role, email, password, phone } = request.body;

      const createUserService = new CreateUserService();
      const result = await createUserService.execute({
        firstName,
        lastName,
        email,
        password,
        phone,
        role,
        

      });

      return response.json(result);
    } catch (error) {
      next(error);
    }
  }

  static async checkUsername(req: Request, res: Response, next: NextFunction) {
    try {
      const { username } = req.query

      if (!username || typeof username !== "string") {
        return res.status(400).json({ message: "Username é obrigatório" })
      }

      const result = await CheckEmailService.execute(username)

      return res.json(result)
    } catch (error) {
      return next(error)
    }
  }

  static async getProfile(req: any, res: Response, next: NextFunction) {
    try {
      const userId = req.user.id;
      const service = new GetUserService();
      const user = await service.execute(userId);
      return res.json(user);
    } catch (err) {
      next(err);
    }
  }

  static async getUsers(req: any, res: Response, next: NextFunction) {
    try {
      const service = new GetAllUsersService();
      const users = await service.execute();
      return res.json(users);
    } catch (err) {
      next(err);
    }
  }

  static async update(req: any, res: Response, next: NextFunction) {
    try {
      const userId = req.params.id;
      const service = new UpdateUserService();
      const updated = await service.execute(userId, req.body);
      return res.json(updated);
    } catch (err) {
      next(err);
    }
  }

  static async changePassword(req: any, res: Response, next: NextFunction) {
    try {
      const userId = (req as any).user.id;
      const { currentPassword, newPassword } = req.body;
      console.log("req.user:", req.user);
      console.log("body:", req.body);
      const service = new ChangePasswordService();
      await service.execute(userId, currentPassword, newPassword);
      return res.json({ message: "Password updated successfully" });
    } catch (err) {
      next(err);
    }
  }

}


