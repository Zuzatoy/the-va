const connection = require('./')
const {generateHash} = require('../auth/hash')

module.exports = {
  getUsers,
  getUserById,
  getUserByUsername,
  createNewUser,
  deleteUser
}

// Sample only: think about what you want this function to actually do...
function getUsers (db = connection) {
  return db('users').select('id', 'username')
}

// Retrieve a users record.
function getUserById (id, db = connection) {
  db('users').where({ id }).first()
}

// Retrieve a user by username.
function getUserByUsername (username, db = connection) {
  db('users').where({username}).first()
}

// Create new user record.
function createNewUser (username, password, db = connection) {
  return generateHash(password)
    .then(hash => db('users')
      .insert({username, password_hash: hash})
    )
}

// Delete user record.
function deleteUser (id, db = connection) {
  return db('users').where('users.id', id).del()
}
