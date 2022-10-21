const mongoose = require('mongoose');

const connectionDB = mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'e-shop',
  })
  .then(() => {
    console.log('Database Connection is ready...');
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = connectionDB;
