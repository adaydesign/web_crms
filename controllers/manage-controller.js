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
        title: "การจัดการสำหรับผู้ดูแลระบบ",
        menu: 2
    }

    // param page
    const ppage = req.params.page
    var pageRender = ""
    if(ppage == "member"){
        pageRender = "manage_member"
    }else if(ppage == "room"){
        pageRender = "manage_room"
    }else if(ppage == "material"){
        pageRender = "manage_material"
    }else{
        res.redirect('./')
        return
    }

      // render
      if (req.session.user != null) {
        res.render(pageRender, params)
    }else{
        res.redirect('./')
    }
}