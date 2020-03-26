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
        title: "ยื่นใบคำร้องขอเข้าพักอาศัย",
        menu: 2
    }

    // param page
    const ppage = req.params.page
    var pageRender = ""
    
    if(ppage == "register"){
        pageRender = "appform_register"
    }else if(ppage == "register2"){
        pageRender = "appform_register2"
    }else if(ppage == "register3"){
        pageRender = "appform_register3"
    }else if(ppage == "check"){
        pageRender = "appform_check"
    }else if(ppage == "order"){
        pageRender = "appform_order"
    }else if(ppage == "approve"){
        pageRender = "appform_approve"
    }else{
        res.redirect('./')
        return
    }

    // render
    res.render(pageRender, params)
    
}