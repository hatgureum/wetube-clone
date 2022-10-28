import express from "express";

const PORT = 4000;

const app = express();

const handleHome = (req, res) => {
  return res.send("Hi");
};

const handleHaha = (req, res) => {
  return res.send("haha");
};
app.get("/", handleHome);
app.get("/haha", handleHaha);

const handelListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}/ 🚀`);

app.listen(PORT, handelListening);
