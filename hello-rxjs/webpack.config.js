module.exports = {

  // file that bootstraps application and kicks everything off
  // webpack analyses this file and its dependencies to produce bundle
  // notice no file extension specified here, its a module name
  entry: "./main",

  // webpack wil create app.js in root project folder
  output: {filename: "app.js"},

  // specify module loaders
  module: {
    loaders: [
      {
        test: /.ts$/,
        load: 'ts-loader'
      }
    ]
  },

  // specify file extensions webpack should process
  resolve: {

  }
}
