module.exports = {
trailingSlash: true,
  async rewrites() {
    return [
      {
        source: '/blog/:path*/',
        destination: 'https://yourwordpressblog.com/:path*/'
      },
    ];
  },
};
