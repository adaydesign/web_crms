// const request = require("request")
const config = require("../includes/config")
// const responseFmt = require("../models/responseFomat")

// render page
exports.pageRender = (req, res) => {
    // check session
    if (req.session.user != null) {
        const userSession = JSON.parse(req.session.user)
        const params = {
            "system": config.SERVER_INFO,
            "user": userSession
        }
        res.render("dashboard", params)
    } else {
        res.redirect("./")
    }
}
