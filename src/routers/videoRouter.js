/* Summary */
// if someone is going to access "/videos", express goes in to videoRotuer
// videoRouter has a route, which is the URL, "/watch"
// => thanks to app.use, [router].get([URL]) works as "/router/URL"
import express from "express";
import {
  watch,
  getEdit,
  postEdit,
  getDelete,
  getUpload,
  postUpload,
} from "../controllers/videoController";
import { protectorMiddleware } from "../middlewares";

const videoRouter = express.Router();

videoRouter.get("/:id([0-9a-f]{24})", watch);
videoRouter
  .route("/:id([0-9a-f]{24})/edit")
  .all(protectorMiddleware)
  .get(getEdit)
  .post(postEdit);
videoRouter
  .route("/:id([0-9a-f]{24})/delete")
  .all(protectorMiddleware)
  .get(getDelete);
videoRouter
  .route("/upload")
  .all(protectorMiddleware)
  .get(getUpload)
  .post(postUpload);

export default videoRouter;
