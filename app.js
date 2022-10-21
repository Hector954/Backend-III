const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const authJwt = require('./middleware/jwt');
const app = express();
const productRoute = require('./routers/productRoute');
const userRoute = require('./routers/userRoute');
const branchRoute = require('./routers/branchRoute');
const payMethodRoute = require('./routers/payMethodRoute');
const rolRoute = require('./routers/rolRoute');
const saleRoute = require('./routers/saleRoute');
require('dotenv').config();
require('./db');

const port = process.env.PORT;
const api = process.env.API_URL;

app.use(cors());
app.options('*', cors());

//middleware
app.use(express.json());
app.use(morgan('tiny'));
app.use(authJwt())

//routes
app.use(`${api}/products`, productRoute);
app.use(`${api}/users`, userRoute);
app.use(`${api}/branch`, branchRoute);
app.use(`${api}/payMethod`, payMethodRoute);
app.use(`${api}/rol`, rolRoute);
app.use(`${api}/sale`, saleRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
