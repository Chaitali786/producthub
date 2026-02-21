import express from "express";
import dotenv from "dotenv";
import kidsRouter from "./routes/kids.js";
import womensRouter from "./routes/womens.js"
import mensRouter from "./routes/mens.js"

dotenv.config();

const app = express();
const port = process.env.PORT;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("pages/index", { 
    pageTitle:"ProductHub",
   
  });
});

app.use("/mens",mensRouter)
app.use("/womens",womensRouter);
app.use("/kids", kidsRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


