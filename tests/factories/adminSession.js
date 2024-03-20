const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const user = {
  _id: "65e5e21113aef5da9e08cfba",
  role:'admin',
  name:'Aleksandre'
};
const createTokenUser = (user) => {
  return { name: user.name, userId: user._id, role: user.role };
};
const refreshToken = crypto.randomBytes(40).toString("hex");
const tokenUser = createTokenUser(user);
const createJWT = ({ payload }) => {
    const token = jwt.sign(payload, process.env.JWT_SECRET);
    return token;
};
const expiresAt = 1000 * 60 * 60;

const createTokens = () => {
    const accessTokenJWT = createJWT({ payload: { tokenUser } });
    const refreshTokenJWT = createJWT({ payload: { tokenUser, refreshToken } });
    return {accessTokenJWT,refreshTokenJWT,user}
}
module.exports = createTokens;
