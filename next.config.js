const withImages = require("next-images");

module.exports = withImages({
  images: {
    disableStaticImages: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firasjerbi.me',
      },
    ],
  },
});