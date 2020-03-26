exports.createResponseFormat = (statusCode, data, count) => {
    return {
        'status': statusCode,
        'data': data ? data : null,
        'count': count ? count : null
    }
}

exports.createErrorResponseFormat = (statusCode, message, systemMessage) => {
    message = message ? message : null
    return {
        'status': statusCode,
        'error': {
            'message': message,
            'systemMessage': systemMessage ? systemMessage : message
        }
    }
}