module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-optimate/' : '/',
  transpileDependencies: [
    'vuetify'
  ]
}
