'use strict'

const db = require('../database');
const xeroFetch = require('../xero/xero-fetch');

module.exports = (server) => {
  server.route({
    method: 'GET',
    path: '/api/status',
    handler: (req, res) => {
      return {
        status: true,
      };
    },
  });
  server.route({
    method: 'POST',
    path: '/api/refresh-xero-data',
    handler: (req, res) => {
      return xeroFetch(db);
    },
  });
  server.route({
    method: 'GET',
    path: '/api/accounts',
    handler: (req, res) => {
      return db.getData('/accounts');
    },
  });
  server.route({
    method: 'GET',
    path: '/api/contacts',
    handler: (req, res) => {
      return db.getData('/contacts');
    },
  });


  return server;
};
