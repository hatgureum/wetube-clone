import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const logger = morgan("tiny");
app.use(logger);

// Router
const globalRouter = express.Router();

const handleHome = (req, res) => res.send("Home");
// use routers insted of app
globalRouter.get("/", handleHome);

const userRouter = express.Router();

const handleEdit = (req, res) => res.send("Edit user");
// "/users" is included already in userRouter
// so we don't need to write "/users/edit"
userRouter.get("/edit", handleEdit);

const videoRouter = express.Router();

const handleWatchVideo = (req, res) => res.send("Watch Video");
videoRouter.get("/watch", handleWatchVideo);

app.use("/videos", videoRouter);
app.use("/users", userRouter);
app.use("/", globalRouter);

/* Summary */
// if someone is going to access "/videos", express goes in to videoRotuer
// videoRouter has a route, which is the URL, "/watch"
// => thanks to app.use, [router].get([URL]) works as "/router/URL"

const handelListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}/ 🚀`);

app.listen(PORT, handelListening);
