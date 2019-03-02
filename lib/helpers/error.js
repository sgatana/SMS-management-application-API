const errors = {
  CONTACT_NOT_FOUND: {
    message: 'recipient phone number does not exist in our directory',
    status: 404
  },
  MESSAGE_NOT_FOUND: {
    message: 'no message(s) available',
    status: 404
  },
  CONTACT_EXISTS: {
    message: 'contact with entered phone number is already registered, please use a different phone number',
    status: 409
  },
  CONTACT_DOES_NOT_EXIST: {
    message: 'contact id provided does not exist in our system. Please use valid contact id',
    status: 403
  },
  NO_CONTACTS: {
    message: 'no contacts availale',
    status: 404
  },
}

module.exports = errors
