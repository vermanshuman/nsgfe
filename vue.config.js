module.exports = {
  publicPath: process.env.VUE_APP_MODE === 'production'? '/nsgfe': '/',
  transpileDependencies: [
    'vuetify'
  ]
}
