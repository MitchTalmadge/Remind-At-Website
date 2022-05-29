import * as path from 'path';
import * as webpack from 'webpack';

const WORKSPACE_DIR = path.join(__dirname, "../");
const DIST_DIR = path.join(WORKSPACE_DIR, "./dist");
const SRC_DIR = path.join(WORKSPACE_DIR, "./src");

const configGenerator = (env: any, argv: any): webpack.Configuration => {
  return {
    mode: env.prod ? "production" : "development",
    entry: {
      "content": path.join(SRC_DIR, "content.ts"),
    },
    devtool: env.prod ? false : "inline-source-map",
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: "ts-loader",
        },
      ],
    },
    output: {
      path: DIST_DIR,
      filename: "[name].js",
    },
    resolve: {
      extensions: [".ts", ".js"],
    },
    watchOptions: {
      ignored: /node_modules/,
      poll: 1000,
    }
  }
}

export default configGenerator;