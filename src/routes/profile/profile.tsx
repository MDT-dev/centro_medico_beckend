
import { Router } from "express";
import { ProfileController } from "../../controllers/profile/ProfileController";

const profileRoutes = Router();

profileRoutes.post("/doctor", ProfileController.createDoctor);
profileRoutes.post("/patient", ProfileController.createPatient);

export { profileRoutes };