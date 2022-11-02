/* Summary */
// if someone is going to access "/videos", express goes in to videoRotuer
// videoRouter has a route, which is the URL, "/watch"
// => thanks to app.use, [router].get([URL]) works as "/router/URL"
import express from "express";
import {
  watch,
  edit,
  upload,
  deleteVideo,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", watch);
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);
videoRouter.get("/upload", upload);

export default videoRouter;
