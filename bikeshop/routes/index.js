var express = require("express");
var router = express.Router();

// Création de la liste des vélos
var dataBike = [
  { name: "BIK045", url: "/images/bike-1.jpg", price: 679 },
  { name: "ZOO45", url: "/images/bike-2.jpg", price: 815 },
  { name: "TITANS", url: "/images/bike-3.jpg", price: 585 },
  { name: "AMIGO12", url: "/images/bike-4.jpg", price: 1025 },
  { name: "BIK015", url: "/images/bike-5.jpg", price: 679 },
  { name: "ZAMIT15", url: "/images/bike-6.jpg", price: 745 },
];

// Variable pour le panier (faut panier)

var dataCardBike = [];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Bike Shop Experience", dataBike: dataBike });
});

/* SHOP PAGE. */
router.get("/shop", function (req, res, next) {
  res.render("shop", {
    title: "Bike Shop Experience - SHOP PAGE",
    dataCardBike: dataCardBike,
  });
});

module.exports = router;
