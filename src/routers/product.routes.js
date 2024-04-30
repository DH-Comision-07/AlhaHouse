const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const upload = require("../middlewares/productMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");
const guestMiddleware = require("../middlewares/guestMiddleware");


// Rutas accesibles solo sin loguear
router.get("/cart", productController.cart);
router.get("/", productController.products);
router.get("/create", authMiddleware, productController.formulary);
router.post("/", upload.single("image"), productController.store);
router.get("/:id/edit", authMiddleware, productController.editForm);
router.put("/:id", authMiddleware, productController.update);
router.get("/productCard", authMiddleware, productController.productCard);
router.delete("/:id", authMiddleware, productController.destroy);
router.get("/:id", guestMiddleware, productController.detail);



module.exports = router;
