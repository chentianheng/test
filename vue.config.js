module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/bmw'
    : '/'
  // devServer: {
  //   proxy: 'http://binarytre.com'
  // }
}