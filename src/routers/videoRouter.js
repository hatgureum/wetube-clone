/* Summary */
// if someone is going to access "/videos", express goes in to videoRotuer
// videoRouter has a route, which is the URL, "/watch"
// => thanks to app.use, [router].get([URL]) works as "/router/URL"
import express from "express";
import { watch, edit } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/watch", watch);
videoRouter.get("/edit", edit);

export default videoRouter;
