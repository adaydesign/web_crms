const express = require("express")
const router = express.Router()

// controller
const indexController = require('../controllers/index-controller')
const appformController = require('../controllers/appform-controller')
const manageController = require('../controllers/manage-controller')
const roomController = require('../controllers/room-controller')
const officerController = require('../controllers/officer-controller')
const userController = require('../controllers/user-controll')
const aboutController = require('../controllers/about-controller')

// index
router.get("/",indexController.pageRender)
router.post("/login",indexController.postLogin)
router.get("/logout",indexController.getLogout)

// appform
router.get("/appform/:page",appformController.pageRender)

// manage
router.get("/manage/:page",manageController.pageRender)

// room
router.get("/room/:page",roomController.pageRender)

// officer
router.get("/officer/:page",officerController.pageRender)

// user
router.get("/user/:page",userController.pageRender)

// about
router.get("/about/:page",aboutController.pageRender)


module.exports = router
