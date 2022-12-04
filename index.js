import express from "express";
import bodyParser from "body-parser";
import { createRequire } from "module";
import sendNotification from "./scripts/push.js";
import { optIn, optOut, receiveNoti } from "./scripts/receiveNotifications.js";

const require = createRequire(import.meta.url);
const app = express();
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.post("/api/push", sendNotification, function (req, res) {
  res.json({ data: req.data });
});

app.post("/api/optin", optIn, function(req, res){
    res.json({ data: req.data });
})

app.post("/api/optout", optOut, function(req, res){
    res.json({ data: req.data });
})

app.post("/api/receive", receiveNoti, function(req, res){
    res.json({ data: req.data });
})

app.listen(process.env.PORT || 5000, () =>
  console.log("Listening on port 5000...")
);
