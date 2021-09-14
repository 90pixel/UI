const path = require('path'); // <-get absolute location for saving

module.exports = {
  mode:'production',
  entry: "./src/lib/index.ts", // <- starting point for bundle 
  output: {
    path: path.resolve(__dirname, 'dist'), //<-where to save ur bundle 
    filename: "index.js", //<-filename for bundled file
    libraryTarget: "commonjs2" //<- to which version are we compiling js 
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
        resolve: {
          extensions:['.ts','.js','.tsx','.jsx'],
        }
      },
    ]
  },
  externals:{
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React"
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM"
    }
  }
}
 