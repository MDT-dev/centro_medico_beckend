import { Router } from "express";
import { UserController } from "../controllers/user/UserController";
import { ensuredAuthenticated } from "../middleware/ensuredAuthenticated";
import { is } from "../middleware/permissions";


const userRoutes = Router();

userRoutes.use(ensuredAuthenticated());
userRoutes.post("/", new UserController().createUser.bind(new UserController()));
userRoutes.get("/check-username", UserController.checkUsername.bind(new UserController()));
userRoutes.get("/me", UserController.getProfile.bind(UserController));
userRoutes.get("/all", UserController.getUsers.bind(UserController));
userRoutes.put("/change-password", UserController.changePassword.bind(UserController));
userRoutes.put("/:id", UserController.update.bind(UserController));

export { userRoutes }; userRoutes
