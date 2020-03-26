const config = require("../includes/config")

// render page
exports.pageRender = (req, res) => {
    // check session
    var user = null
    var showLoginPage = true
    if (req.session.user != null) {
        user = JSON.parse(req.session.user)
        showLoginPage = false
    }

    const params = {
        user: user,
        system: config.SERVER_INFO,
        show_login: showLoginPage,
        show_title: true,
        title: "เกี่ยวกับระบบ",
        menu: 4
    }

    // param page
    const ppage = req.params.page
    var pageRender = ""
    if(ppage == "app"){
        pageRender = "about_app"
    }else if(ppage == "doc"){
        pageRender = "about_doc"
    }else if(ppage == "manual"){
        pageRender = "about_manual"
    }else if(ppage == "contact"){
        pageRender = "about_contact"
    }else{
        res.redirect('./')
        return
    }

    res.render(pageRender, params)
}