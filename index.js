import express from "express";
import bodyParser from "body-parser";
import { createRequire } from "module";
import sendNotification from "./scripts/push.js";
import { optIn, optOut, receiveNoti } from "./scripts/receiveNotifications.js";

const require = createRequire(import.meta.url)
const app = express()
const cors = require("cors")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.post("/api/push", sendNotification, function (req, res) {
  res.json({ data: req.data })
})

app.get("/api/optin", optIn, function (req, res) {
  res.json({ data: req.data })
})

app.get("/api/receive", receiveNoti, function (req, res) {
  res.json({ data: req.data })
})

app.get("/api/resolve/name", resolveName, function (req, res) {
  res.json({ data: req.data })
})


app.get("/api/resolve/address", resolveAddress, function (req, res) {
  res.json({ data: req.data })
})

app.post("/api/resolve/create", createMapping, function (req, res) {
  res.json({ data: req.data })
=======
app.post("/api/optin", optIn, function(req, res){
    res.json({ data: req.data });
})

app.post("/api/optout", optOut, function(req, res){
    res.json({ data: req.data });
})

app.post("/api/receive", receiveNoti, function(req, res){
    res.json({ data: req.data });
>>>>>>> 6f1ebca13978d1dd752fcb05e0f62ea259b13012
})

app.listen(process.env.PORT || 5000, () =>
  console.log("Listening on port 5000...")
)
