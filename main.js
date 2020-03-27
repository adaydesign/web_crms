const express = require("express")
const session = require("express-session")
const helmet = require("helmet")
const bodyParser = require("body-parser")
const path = require("path")

const app = express()

// guard
app.use(helmet())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// session
const sessionExpHour = 60000 * 60 * 24 // 1 day
app.use(session({
  key: "user",
  secret: "crms-user-session-26032020-secret",
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: new Date(Date.now() + sessionExpHour),
    maxAge: sessionExpHour
  }
}))

app.use(express.static(path.join(__dirname + "/views")))
app.set("views", __dirname + "/views")
app.set("view engine", "ejs")

app.use("/", require("./routes/index"))

const port = process.env.PORT || 8000
app.listen(port, () => {
  console.log(`COJ Resident Management System Server is listening on port ${port}`)
})
