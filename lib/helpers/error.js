const errors = {
  CONTACT_NOT_FOUND: {
    message: 'contact not found',
    status: 404
  },
  MESSAGE_NOT_FOUND: {
    message: 'message(s) not found',
    status: 404
  },
  CONTACT_EXISTS: {
    message: 'phone number already in use',
    status: 409
  }
}

module.exports = errors
