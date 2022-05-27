const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const optimizeCssAssetsWebpackPlugin = require("css-minimizer-webpack-plugin");
const terserWebpackPlugin = require("terser-webpack-plugin");

function resolve(relatedPath) {
  return path.join(__dirname, relatedPath);
}

const webpackConfig = (env, argv) => {
  const isEnvDevelopment = argv.mode === "development" || !argv.mode;
  const isEnvProduction = argv.mode === "production";
  return {
    mode: isEnvProduction ? "production" : isEnvDevelopment && "development",
    devtool: isEnvProduction
      ? "source-map"
      : isEnvDevelopment && "cheap-module-source-map",
    entry: {
      app: [resolve("../src/index.jsx")],
    },
    output: {
      path: resolve("../build"),
      // filename: "bundle.js",
      // publicPath: "/",
    },
    devServer: {
      port: 8090,
      historyApiFallback: true,
      open: true,
    },
    performance: {
      hints: false
    },
    optimization: {
      minimize:true,
      minimizer:[
        new terserWebpackPlugin(),
        new optimizeCssAssetsWebpackPlugin(),
      ],
      splitChunks: {
        chunks: "all",
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            reuseExistingChunk: true,
            name: "vendor",
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
            name: "bundle",
          },
        },
      },
    },
    resolve: {
      extensions: [".js", ".jsx"],
      alias: {
        "@": path.resolve("src"),
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "Github热⻔门项⽬目",
        template: resolve("../public/index.html"),
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true,
        },
      }),
      new MiniCssExtractPlugin({
        filename: "static/css/[name].[contenthash:8].css",
        chunkFilename: "static/css/[name].[contenthash:8].chunk.css",
      }),
    ],
    target: "web",
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif|svg)$/,
          exclude: /node_modules/,
          include: [resolve("../src/asset")],
          loader: "url-loader",
          options: {
            limit: 10240,
            name: "[name].[ext]",
            outputPath: "images",
          },
        },
        {
          test: /\.(js|mjs|jsx)$/,
          exclude: /node_modules/,
          loader: require.resolve("babel-loader"),
          options: {
            presets: ["@babel/preset-react"],
          },
        },
        {
          test: /\.(scss|sass|css)$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader",
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  ident: "postcss",
                  config: false,
                  plugins: [
                    [
                      "postcss-preset-env",
                      {
                        autoprefixer: {
                          flexbox: "no-2009",
                        },
                        stage: 3,
                      },
                    ],
                    [
                      "postcss-pxtorem",
                      {
                        exclude: /node_modules/,
                        rootValue: 100,
                        selectorBlackList: [],
                        propList: ["*"],
                      },
                    ],
                  ],
                },
              },
            },
          ],
        },
      ],
    },
  };
};

module.exports = webpackConfig;
