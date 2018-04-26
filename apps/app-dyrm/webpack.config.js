//=============================================================================
/*Roughly the configuration file says that 
(1) we want to use the src/index.js file as entry point to bundle all of its 
imported files. 
(2) The bundled files will result in a bundle.js file which 
(3) will be generated in our already set up /dist folder. The /dist folder will 
be used to serve our app.*/
//=============================================================================
const webpack = require("webpack");
// https://github.com/jantimon/html-webpack-plugin
// Plugin that simplifies creation of HTML files to serve your bundles
const HtmlWebpackPlugin = require("html-webpack-plugin"); //installed via npm
// https://github.com/webpack-contrib/uglifyjs-webpack-plugin
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
//=============================================================================
const config = {
  mode: "development",
  entry: ["./src/index.js"],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        // https://github.com/babel/babel-loader
        // This package allows transpiling JavaScript files using Babel and webpack.
        // https://github.com/babel/babel/tree/master/packages/babel-preset-env
        /*A Babel preset that compiles ES2015+ down to ES5 by automatically 
        determining the Babel plugins and polyfills you need based on your 
        targeted browser or runtime environments. */
        // https://babeljs.io/docs/plugins/preset-react/
        // https://babeljs.io/docs/plugins/preset-stage-2/
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
  plugins: [
    new UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  devServer: {
    contentBase: "./dist",
    hot: false
  }
};
module.exports = config;
