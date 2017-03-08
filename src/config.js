require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  app: {
    title: 'Splunk Redux',
    description: 'Building websites with splunk & react tech stack.',
    head: {
      titleTemplate: 'React Redux Example: %s',
      meta: [
        {name: 'description', content: 'Building websites with splunk & react tech stack.'},
        {charset: 'utf-8'},
        {property: 'og:site_name', content: 'Splunk Redux'},
        {property: 'og:locale', content: 'en_US'},
        {property: 'og:title', content: 'Splunk Redux'},
        {property: 'og:description', content: 'Building websites with splunk & react tech stack.'},
        {property: 'og:card', content: 'summary'},
        {property: 'og:site', content: 'David Guan'},
        {property: 'og:creator', content: 'David Guan'},
        // {property: 'og:image', content: ''},
        // {property: 'og:image:width', content: '200'},
        // {property: 'og:image:height', content: '200'}
      ]
    }
  },

}, environment);
