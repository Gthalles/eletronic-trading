import { UserRegistrationController, UsersListController } from "../controller";
import { Router } from "express";

const router = Router();

router.post("/user/register", new UserRegistrationController().handle.bind(new UserRegistrationController()));

router.get("/users/list", new UsersListController().handle.bind(new UsersListController()));

export default router;