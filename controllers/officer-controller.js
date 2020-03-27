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
        title: "การจัดการสำหรับผู้ดูแลประจำอาคาร",
        menu: 2
    }

    // param page
    const ppage = req.params.page
    var pageRender = ""
    if(ppage == "bill"){
        pageRender = "officer_bill"
    }else if(ppage == "material"){
        pageRender = "officer_material"
    }else{
        res.redirect('../')
    }

    // render
    if (req.session.user != null) {
        res.render(pageRender, params)
    }else{
        res.redirect('../')
    }
}