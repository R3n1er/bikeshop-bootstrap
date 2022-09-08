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

// Variable pour le panier - initialiser le panier commme un tableau vide
var dataCardBike = [];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {dataBike: dataBike });
});

/* SHOP PAGE. Afficher le panier*/
router.get("/shop", function (req, res, next) {
  console.log(req.query) // Voir ce qui transite dans la requete
// Envoyer les elements dans le panier avec un push
  dataCardBike.push({
    name : req.query.bikeNameFromFront,
    url: req.query.bikeImageFromFront,
    price: req.query.bikePriceFromFront,
    quantity: 1,
  })

  res.render("shop", {dataCardBike: dataCardBike,
  });
});

// Route Delete SHop - Supprimer un velo du panier
router.get("/delete-shop", function (req, res, next) {
  dataCardBike.splice(req.query.position, 1);
  res.render("shop", { dataCardBike: dataCardBike });
});


// Route Update Shop
router.post("/update-shop", function (req, res, next) {
  var position = req.body.position;
  var newQuantity = req.body.quantity;

  dataCardBike[position].quantity = newQuantity;

  res.render("shop", { dataCardBike: dataCardBike });
});



module.exports = router;
