// const pool = require('../config/db');

// const createCompany = async (name, ico, address, contact, director) => {
//   const query = `INSERT INTO companies (name, ico, address, contact, director) VALUES ($1, $2, $3, $4, $5) RETURNING *`;
//   const values = [name, ico, address, contact, director];
//   const result = await pool.query(query, values);
//   return result.rows[0];
// };

// module.exports = { createCompany };