//dependencies

const express = require("express");
const path = require("path");
const pages = require("./pages.js");

//library initialization

const server = express();
server
  //request of body 
  .use(express.urlencoded({extended: true}))

  // using static files

  .use(express.static("public"))

  //configurating template engine

  .set("views", path.join(__dirname, "views"))
  .set("view engine", "hbs")

  //creating routes
  .get("/", pages.index)
  .get("/orphanage", pages.orphanage)
  .get("/orphanages", pages.orphanages)
  .get("/create-orphanage", pages.createOrphanage)
  .post("/save-orphanage", pages.saveOrphanage)
//turn on server

server.listen(5500);
