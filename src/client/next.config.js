require('dotenv').config();

module.exports = {
  env: {
    CLOUDINARY_PRESET: process.env.CLOUDINARY_PRESET,
    CLOUDINARY_ACCOUNT: process.env.CLOUDINARY_ACCOUNT,
    test: 'test',
  },
};
