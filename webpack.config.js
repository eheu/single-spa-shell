const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const config = ({ mode }) => {
  return {
    mode: mode,

    entry: "./src/main.js",

    output: {
      path: __dirname + "/build/",
      filename: "main.js",
      publicPath: "http://localhost:3000/",
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/main.html",
        inject: "head",
      }),
      new ModuleFederationPlugin({
        name: "h-single-spa",
        filename: "remoteEntry.js",
        library: { type: "var", name: "h-single-spa" },
        remotes: {
          webComponents: "webComponents",
          reactComponents: "reactComponents",
        },
        exposes: {},
        shared: ["react", "react-dom"],
      }),
    ],
  };
};

module.exports = config;
