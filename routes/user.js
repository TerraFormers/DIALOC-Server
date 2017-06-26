const express = require("express");
const router = express.Router();
const queries = require("../db/queries");


router.get("/", function(req, res, next) {
  queries.getAll().then(function(users) {
    res.json(users);
  })
});

router.get("/:id", function(req, res, next) {
  queries.getOne(req.params.id).then(function(users) {
    res.json(users);
  })
});

router.get("/:email", function(req, res, next) {
  queries.getOne(req.params.email).then(function(users) {
    res.json(users);
  })
});

module.exports = router;
