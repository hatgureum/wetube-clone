// globalRouter doesn't need controller. - #4.3

// I have to import express to use it.
// because js files are separate, I have to import in every file.
import express from "express";
import { home, search } from "../controllers/videoController";
import {
  getJoin,
  postJoin,
  getLogin,
  postLogin,
} from "../controllers/userController";
import { publicOnlyMiddleware } from "../middlewares";

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.route("/join").all(publicOnlyMiddleware).get(getJoin).post(postJoin);
rootRouter
  .route("/login")
  .all(publicOnlyMiddleware)
  .get(getLogin)
  .post(postLogin);
rootRouter.get("/search", search);

// Question : what does defualt mean?
// Answer   : when I import this file, I can only import one variable.
//            And imported name doesn't matter.
export default rootRouter;
