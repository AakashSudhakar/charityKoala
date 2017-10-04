// app.js

// CharityKoala
// Copyright (C) October 4, 2017 by CharityKoala.
// Designed and developed by Aakash Sudhakar.

// ============================================================================

var request = require("request");
var express = require("express");
var exphbs = require("express-handlebars");
var mongoose = require("mongoose");
var app = express();

mongoose.connect("mongodb://localhost/3000");

app.listen(3000, function() {
  console.log("CharityKoala draft listening on port 3000.")
})
