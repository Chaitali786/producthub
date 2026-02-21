import express from "express";
import womensProducts from "../data/womensData.js";

const womensRouter = express.Router();

womensRouter.get("/", (req, res) => {
  res.render("pages/womens", {
    pageTitle: "Womens Collection",
    page: "womens",
    isSalePage: false,
    products: womensProducts,
  });
});

womensRouter.get("/:category", (req, res) => {
  const slug = req.params.category;
  let filteredProducts;

  if (slug === "sale") {
    filteredProducts = womensProducts.filter((p) => p.onSale === true);
    //console.log(`Sale products are ${filteredProducts}`)
    res.render("pages/womens", {
      pageTitle: "Womens Sale",
      page: "womens",
      isSalePage: true,
      products: filteredProducts,
    });
  } else {
    res.render("pages/womens", {
      pageTitle: "Womens Collection",
      page: "womens",
      isSalePage: false,
      products: womensProducts,
    });
  }
});

export default womensRouter;
