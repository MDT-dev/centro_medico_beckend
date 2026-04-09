import { Router } from "express";
import { SessionController } from "../controllers/auth/SessionController";
import { LogoutController } from "../controllers/auth/LogoutController";


const authRoutes = Router();

// login route  
authRoutes.post("/login", new SessionController().handle);

// logout route
authRoutes.post("/logout", new LogoutController().handle);

export { authRoutes };
