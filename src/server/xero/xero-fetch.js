'use strict';

const XeroClient = require('xero-node').AccountingAPIClient;

const config = {
    appType: 'private',
    consumerKey: 'IBT5QQ2IDK37QCJFSLAYZ8E6IPFLGA',
    consumerSecret: 'RSPOP0D2CGCHQZOUGTMHCHKTXOBQTR',
    privateKeyPath: `${__dirname}/private.key.pem`,
};
const xero = new XeroClient(config);

module.exports = async function(db) {
  const accsResponse = await xero.accounts.get();
  db.push("/accounts", accsResponse.Accounts);
  const ccsResponse = await xero.contacts.get();
  db.push("/contacts", ccsResponse.Contacts);
  return {
    accounts: accsResponse.Accounts,
    contacts: ccsResponse.Contacts,
  };
};
