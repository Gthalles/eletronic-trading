import { UserRegistrationController } from "../controller";
import { Router } from "express";
import { UsersListController } from "../controller/UsersListController";

const userRegistrationController = new UserRegistrationController();

const usersListController = new UsersListController();

const router = Router();

router.post("/user/register", userRegistrationController.handle.bind(userRegistrationController));

router.get("/users/list", usersListController.handle.bind(UsersListController));

export default router;