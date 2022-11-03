import express from "express";
import morgan from "morgan";

// ./ means current folder. Meanwhile, ../ means previous folder
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4000;

const app = express();
const logger = morgan("tiny");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use("/videos", videoRouter);
app.use("/users", userRouter);
app.use("/", globalRouter);

const handelListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}/ 🚀`);

app.listen(PORT, handelListening);
