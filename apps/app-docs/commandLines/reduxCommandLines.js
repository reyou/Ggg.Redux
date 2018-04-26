//=============================================================================
// D:\Git\Ggg\Ggg.Redux\app\commandLines\reduxCommandLines.js
//=============================================================================
// https://www.npmjs.com/package/redux
//=============================================================================
var install_packages = {
  // https://www.npmjs.com/package/redux
  redux: "npm install redux --save",
  react: "npm install react --save",
  "react-dom": "npm install react-dom --save",
  "react-redux": "npm install react-redux --save",
  "redux-devtools": "npm install redux-devtools --save-dev",
  // https://github.com/zkat/npx
  // execute npm package binaries
  npx: "npm install -g npx",
  // https://babeljs.io/docs/usage/cli/
  "babel-cli": "npm install --save-dev babel-cli",
  "babel-preset-es2015": "npm install babel-preset-es2015 --save-dev",
  "babel-preset-react": "npm install babel-preset-react --save-dev",
  "babel-plugin-transform-react-jsx":
    "npm install babel-plugin-transform-react-jsx --save-dev",
  "node-fetch": "npm install node-fetch --save",
  "redux-thunk": "npm install redux-thunk --save"
};
//=============================================================================
// https://babeljs.io/docs/usage/cli/
// package.json
var babel = {
  npm_run: "npm run compile",
  compile: "npx babel TheGist.js --out-file TheGist-compiled.js",
  // If you would rather have inline source maps, you may use --source-maps inline.
  inline:
    "npx babel script.js --out-file script-compiled.js --source-maps inline",
  // Compile the entire docs directory and output it to the docs-compiled directory.
  // You may use --out-dir or -d. This doesn’t overwrite any other files or
  // directories in docs-compiled.
  folder: "npx babel docs/ --out-dir docs-compiled/",
  watch: "npx babel script.js --out-file script-compiled.js --watch"
};
//=============================================================================
var npm = {
  outdated: "npm outdated"
};
//=============================================================================
