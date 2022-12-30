const route = require("express").Router()
const controller = require("../controllers/youtube.controller")
route.post("/link",controller.downloadFromLinkYoutube)
route.post("/download",controller.isDownloaded)
module.exports = route