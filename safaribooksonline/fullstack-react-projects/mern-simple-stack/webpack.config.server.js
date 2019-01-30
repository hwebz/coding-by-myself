const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const CURRENT_WORKING_DIR = process.cwd()

const config = {
    name: "server",
    entry: [
        "./server/server.js"
    ],
    target: "node",// in order to ignore built-in modules like path, fs, etc.
    output: {
        path: path.join(CURRENT_WORKING_DIR, "/dist"),
        filename: 'server.generated.js',
        publicPath: "/dist/"
    },
    externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    "babel-loader"
                ]
            }
        ]
    }
}

module.exports = config
