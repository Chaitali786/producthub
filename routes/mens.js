import express from "express";
import mensProducts from "../data/mensData.js";

const mensRouter = express.Router();

mensRouter.get("/", (req, res) => {
  res.render("pages/mens", {
    pageTitle: "Mens Collection",
    page: "mens",
    products: mensProducts,
  });
});

export default mensRouter;
