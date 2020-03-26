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
        show_title: false,
        menu: 1
    }

    res.render("index", params)
}

// login
exports.postLogin = (req, res) => {
    var session = req.session
    
    const username = req.body.username

    // test login / demo session data
    var userData = {
        username: username,
        fullname: 'นายศักดิ์ชัย บุญดี (ผู้ใช้ทั่วไป)',
        role: 4
    }
    if(username == "admin1"){
        userData.fullname = "เจ้าหน้าที่กองสวัสดิการ"
        userData.role = 1
    }else if(username == "officer1"){
        userData.fullname = "ผู้ดูแลประจำอาคาร"
        userData.role = 2
    }else if(username == "1000000000001"){
        userData.fullname = "นายสวัสดี มีโชค (ผู้อยู่อาศัย)"
        userData.role = 3
    }

    // save session
    session.user = JSON.stringify(userData)

    res.redirect('./')
}

exports.getLogout = (req, res) => {
    res.clearCookie('user')
    req.session.destroy(err => {
      res.redirect("./")
    })
  }
