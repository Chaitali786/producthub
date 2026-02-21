import express from "express";
import kidsProducts from "../data/kidsData.js";

const kidsRouter = express.Router();

kidsRouter.get("/", (req, res) => {
  res.render("pages/kids", { 
    pageTitle: "Kids Collection", 
    page: "kids",
    products: kidsProducts 
  });
});

kidsRouter.get("/:category", (req, res) => {
  const slug = req.params.category; 
  
  
  const filteredProducts = kidsProducts.filter(p => p.category === slug);
  //console.log(`Kids Filtered products are ${filteredProducts}`)
  
  res.render("pages/kids", { 
    pageTitle: slug.charAt(0).toUpperCase() + slug.slice(1), 
    page: "kids",
    products: filteredProducts 
  });
});

export default kidsRouter;