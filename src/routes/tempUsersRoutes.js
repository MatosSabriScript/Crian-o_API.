import { Router } from "express";
import {getTempUsers,returnPeople} from '../controllers/tempUsersController.js';

const userRouter = Router();

userRouter.post("/usernew", (req,res) => {
    const {raceNumber,statusComplemented,createdAt } = req.body;
    const newPeoplecreate = getTempUsers(raceNumber,statusComplemented,createdAt);
    res.status(200).json({newPeoplecreate});
});

userRouter.get("/user", (req,res) => {
    const listPeople = returnPeople();
    res.status(200).json({listPeople});
});

export { userRouter}