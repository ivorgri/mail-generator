module.exports = {
  root: true,
  'extends': [
    'plugin:vue/essential',
    '@vue/airbnb'
  ],
  'env': {
    'cypress/globals': true
  },
  'plugins': [
    'cypress'
  ]
}