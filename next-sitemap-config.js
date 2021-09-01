module.exports = {
  siteUrl: 'https://americantravelconsulting.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: ['/about', '/contact', '/payment', '/destinations'],
      },
      // { userAgent: '*', disallow: '/contact' },
      // { userAgent: '*', disallow: '/payment' },
      { userAgent: '*', allow: '/' },
    ],
  },
  exclude: ['/about', '/contact', '/payment', '/destinations'],
};
