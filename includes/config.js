const SERVER_INFO = {

}

// api url
const API_URL = "http://localhost:4000/api/v1"
const API_HEADER = {
    'Content-Type': 'application/json'
}
const API = {
    // header
    HEADER: API_HEADER,

    // other
    POST_LOGIN: `${API_URL}/authen`
}

module.exports = { SERVER_INFO, API }