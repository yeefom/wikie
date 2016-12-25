const db = require('../config/db');

function query(queryString) {
  return new Promise((resolve, reject) => {
    db.connect((err, client, done) => {
      if (err) {
        console.error('error connecting to database', err);
        reject(err);
      } else {
        client.query(queryString, (err, result) => {
          done();

          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      }
    });
  });
}

module.exports = {
  query
};
