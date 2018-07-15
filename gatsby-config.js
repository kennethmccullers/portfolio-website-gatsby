module.exports = {
  siteMetadata: {
    title: 'Kenneth McCullers',
  },
  plugins: ['gatsby-plugin-react-helmet',
  			'gatsby-plugin-catch-links',
        'gatsby-transformer-remark',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        'gatsby-plugin-netlify-cms',
  			{
  				resolve: `gatsby-source-filesystem`,
  				options: {
  					path: `${__dirname}/src/pages`,
  					name: 'pages'
  				},
  			},
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            path: `${__dirname}/src/images`,
            name: 'images'
          },
        }
  			
  ]
}
