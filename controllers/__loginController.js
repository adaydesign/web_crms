const request = require("request")
const config = require("../includes/config")
const responseFmt = require("../models/responseFomat")

// render page
exports.pageRender = (req, res) => {
  // check session
  if (req.session.user != null) {
    // const userSession = JSON.parse(req.session.user)
    // const params = {
    //   "system": config.SERVER_INFO,
    //   "user": userSession
    // }
    res.redirect("./dashboard")
  } else {
    res.render("login")
  }
}

// login submit
exports.postSubmit = (req, res) => {
  var session = req.session

  const username = req.body.username
  const password = req.body.password

  // check empty
  if (username == "" || password == "") {
    res.status(403).json(responseFmt.createErrorResponseFormat(403, 'กรุณาใส่ชื่อบัญชีหรือรหัสผ่าน'))
    return;
  }

  // send request
  var data = {
    'username': username,
    'password': password
  }

  var options = {
    url: config.API.POST_LOGIN,
    method: 'POST',
    headers: config.API.HEADER,
    body: JSON.stringify(data)
  }

  request(options, (error, response, body) => {
    if (!error) {
      const rsJson = JSON.parse(body)
      if (rsJson.status >= 200 && rsJson.status < 300) {
        // session
        session.user = JSON.stringify(rsJson.data)
        res.json(responseFmt.createResponseFormat(response.statusCode, rsJson.data))
      } else {
        res.status(rsJson.status).json(responseFmt.createErrorResponseFormat(rsJson.status, rsJson.message))
      }
    } else {
      console.log(error)
      res.status(response.statusCode).json(responseFmt.createErrorResponseFormat(response.statusCode, 'ไม่สามารถเข้าระบบได้', error))
    }
  })
}

// logout
exports.getLogout = (req, res) => {
  res.clearCookie('user')
  req.session.destroy(err => {
    if (!err) {
      // res.json(responseFmt.createResponseFormat(200))
      res.redirect("./")
    } else {
      res.status(400).json(responseFmt.createErrorResponseFormat(400, 'ออกจากระบบไม่สำเร็จ', error))
    }
  })
}

