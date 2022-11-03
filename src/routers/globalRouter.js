// globalRouter doesn't need controller. - #4.3

// I have to import express to use it.
// because js files are separate, I have to import in every file.
import express from "express";
import { trending, search } from "../controllers/videoController";
import { join, login } from "../controllers/UserController";

const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("/login", login);

// Question : what does defualt mean?
// Answer   : when I import this file, I can only import one variable.
//            And imported name doesn't matter.
export default globalRouter;
