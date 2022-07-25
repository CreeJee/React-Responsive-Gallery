/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  entry: "./src/index.tsx",
  output: {
    publicPath: "/dist/",
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    libraryTarget: "commonjs2",
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", "scss"],
    modules: [path.resolve("./src"), path.resolve("./node_modules")],
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        use: {
          loader: "ts-loader",
        },
        exclude: /node_modules/,
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  externals: {
    react: "commonjs react",
    "react-dom": "commonjs react-dom",
  },
  devServer: {
    contentBase: "./dist",
  },
  devtool: "inline-source-map",
};
