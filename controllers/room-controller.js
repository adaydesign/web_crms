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
        title: "ข้อมูลหัองพัก",
        menu: 2
    }

    // param page
    const ppage = req.params.page
    var pageRender = ""
    if(ppage == "bill"){
        pageRender = "room_bill"
    }else if(ppage == "data"){
        pageRender = "room_data"
    }else if(ppage == "material"){
        pageRender = "room_material"
    }else if(ppage == "water"){
        pageRender = "room_water"
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