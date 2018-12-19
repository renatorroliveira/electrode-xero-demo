'use strict';

const JsonDB = require('node-json-db');

const db = new JsonDB('xeroDatabase', true, true);
db.load();
try {
  const vendors = db.getData('/contacts');
} catch (err) {
  db.push('/contacts', []);
}
try {
  const accounts = db.getData('/accounts');
} catch (err) {
  db.push('/accounts', []);
}

module.exports = db;
