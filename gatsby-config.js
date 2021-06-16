// gatsby-config.js
module.exports = {
  plugins: [
    'gatsby-plugin-ts-config',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images\/.*\.svg/,
        },
      },
    },
  ],
}
