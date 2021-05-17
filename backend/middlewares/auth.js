const jwt = require('jsonwebtoken');
const User = require('../models/User');

async function createToken(data) {
  return jwt.sign(data, process.env.JWT_SECRET);
//create an env file in root folder and define the jwt secret key else you can also write here directly
}

async function validateToken(req, res, next) {
  try {
    const token = req.headers.authorization || req.body.authorization ;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Authorization is missing',
      });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({
        success: false,
        message: 'Invalid Authorization',
      });
    }

    const user = await User.findById(decoded);
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid User',
      });
    }
    req.user = user;

    return next();
  } catch (e) {
    console.log('err', e);
    return res
      .status(401)
      .json({ success: false, message: 'could not authorize' });
  }
}



module.exports = {
  createToken,
  validateToken,
};
