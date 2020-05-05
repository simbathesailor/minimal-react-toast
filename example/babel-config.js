const process = require('process');
module.exports = {
  plugins: [
    [
      '@simbathesailor/babel-plugin-use-what-changed',
      {
        active: true,
      },
    ],
  ],
};
