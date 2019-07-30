module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/bmw' : '/',
  outputDir: "bmw"
  // devServer: {
  //   proxy: 'http://binarytre.com'
  // }
}