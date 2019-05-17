const router = require("express").Router()
const manifestRoutes = require("./manifestAPI.js")
const userRoutes = require("./userAPI.js")
const savedRoutes = require("./savedAPI.js")

// 🧮
router.use("/manifest", manifestRoutes)
// 👥
router.use("/user", userRoutes)
// 💾 🌺
router.use("/saved", savedRoutes)

module.exports = router
