import { Request, Response, NextFunction } from "express";
import { CreateDoctorProfileService, CreatePatientProfileService } from "../../services/ProfileService";


export class ProfileController {

  static async createDoctor(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId, crm, specialization, bio } = req.body;

      const service = new CreateDoctorProfileService();
      const result = await service.execute({
        userId,
        crm,
        specialization,
        bio,
      });

      return res.json(result);
    } catch (err) {
      next(err);
    }
  }

  static async createPatient(req: Request, res: Response, next: NextFunction) {
    try {
      const service = new CreatePatientProfileService();
      const result = await service.execute(req.body);

      return res.json(result);
    } catch (err) {
      next(err);
    }
  }
}