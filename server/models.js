const db = require('../db/dbConfig')

module.exports = {
  findOneUser(username) {
    return db.any(`
      SELECT * FROM users
      WHERE username = $1
    `, username);
  },

  addUser(data) {
    return db.none(`
      INSERT INTO users
        (fullname, username, birthday, email, profilepic, pass_digest)
      VALUES
        ($/fullName/, $/username/, $/birthday/, $/email/, $/profilePic/, $/pass_digest/)
    `, data);
  },
}
