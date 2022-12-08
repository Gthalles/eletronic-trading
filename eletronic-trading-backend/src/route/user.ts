import { UserRegistrationController } from "../controller";
import { Router } from "express";

const userRegistrationController = new UserRegistrationController();

const router = Router();

router.post("/user/register", userRegistrationController.handle.bind(userRegistrationController));

export default router;