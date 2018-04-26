//=============================================================================
/*Roughly the configuration file says that 
(1) we want to use the src/index.js file as entry point to bundle all of its 
imported files. 
(2) The bundled files will result in a bundle.js file which 
(3) will be generated in our already set up /dist folder. The /dist folder will 
be used to serve our app.*/
//=============================================================================
const webpack = require("webpack");
//=============================================================================
module.exports = {
  entry: ["react-hot-loader/patch", "./src/index.js"],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js"
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: "./dist",
    hot: true
  }
};
