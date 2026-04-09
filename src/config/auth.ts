export default {
  jwt: {
    secret: process.env.JWT_SECRET_KEY || "b2fc25582af9861459837b12ed2a6742",
    expiresIn: "1d", // 1 dia
  },
};
