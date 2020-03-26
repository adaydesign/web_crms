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
        title: "ข้อมูลบัญชีผู้ใช้",
        menu: 3
    }

    // param page
    const ppage = req.params.page
    var pageRender = ""
    if(ppage == "profile"){
        pageRender = "user_profile"
    }else if(ppage == "edit"){
        pageRender = "user_edit"
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