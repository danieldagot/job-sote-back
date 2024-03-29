
const express = require("express");
const app = express();
const { ApolloServer, gql } = require("apollo-server-express");
//const port = process.env.PORT
const path = require("path");
let port = process.env.PORT || 8080;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const resolvers = require("./src/resolvers");
const typeDefs = require("./src/typeDefs");
const cors = require("cors");
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;



var url =  "mongodb://heroku_7kvrjp7h:ebp758qdj6f9u1monqhr8d82a5@ds061641.mlab.com:61641/heroku_7kvrjp7h"

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

MongoClient.connect(url, function(err, db) {
  if (err) {
    console.log("Unable to connect to the mongoDB server. Error:", err);
  } else {
    console.log("Connection established to", url);
    db.close();
  }
});

const startServer = async () => {
  

  app.listen(process.env.PORT || 4000, function() {
    console.log(
      "Express server listening on port %d in %s mode",
      this.address().port,
      app.settings.env
    );
    console.log(`🚀 ${server.graphqlPath}`);
  });
};

startServer();