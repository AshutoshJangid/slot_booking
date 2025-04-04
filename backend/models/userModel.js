const connection = require('../config/db');
const bcrypt = require('bcryptjs');

/**
 * Creates a new user in the database.
 * @param {string} name - User's full name.
 * @param {string} email - User's email (must be unique).
 * @param {string} password - User's plain-text password (hashed before saving).
 * @param {number} role_id - Role ID (1 = Superadmin, 2 = Admin, 3 = User).
 */
const createUser = async (name, email, password, role_id) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return new Promise((resolve, reject) => {
    const sql = `INSERT INTO users (name, email, password, role_id) VALUES (?, ?, ?, ?)`;
    connection.query(sql, [name, email, hashedPassword, role_id], (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

/**
 * Retrieves a user from the database by email.
 * @param {string} email - The email of the user to retrieve.
 * @returns {Promise<Object>} - The user object if found, otherwise null.
 */
const getUserByEmail = (email) => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM users WHERE email = ?`;
    connection.query(sql, [email], (err, results) => {
      if (err) reject(err);
      resolve(results[0]); // Return first matching user
    });
  });
};

module.exports = { createUser, getUserByEmail };
