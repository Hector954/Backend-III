const expressJwt = require('express-jwt');

const authJwt = () => {
  const secret = process.env.SECRET_KEY;
  return expressJwt({
    secret: secret,
    algorithms: ['HS256'],
    expired: 3600,
  }).unless({
    path: ['/api/v1/users/login', '/api/v1/users/register'],
  });
};

module.exports = authJwt;
