const path = require('path');
const webpack = require("webpack");

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StatsWriterPlugin = require("webpack-stats-plugin").StatsWriterPlugin;
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require("compression-webpack-plugin")

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

console.log('IS_PRODUCTION: ', IS_PRODUCTION);

let plugins = [
    new webpack
        .optimize
        .CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js',
            minChunks: function (module, count) {
                return module.context && module
                    .context
                    .indexOf("node_modules") !== -1;
            }
        }),
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': IS_PRODUCTION ? JSON.stringify('production') : JSON.stringify('develop')
        }
    })
];

if (IS_PRODUCTION) {
    plugins.push(new BundleAnalyzerPlugin({analyzerMode: 'static'}));
    plugins.push(new webpack.optimize.AggressiveMergingPlugin());
    plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
    plugins.push(new UglifyJSPlugin());
    plugins.push(new webpack.LoaderOptionsPlugin({minimize: true, debug: false}));
    plugins.push(new CompressionPlugin({
        asset: "[path].gz[query]",
        algorithm: "gzip",
        test: /\.(js|html|css)$/,
        threshold: 0,
        minRatio: 0.8
    }));
} else {
    plugins.push(new webpack.HotModuleReplacementPlugin());
    plugins.push(new webpack.NoEmitOnErrorsPlugin());
}

const loaders = IS_PRODUCTION
    ? [
        {
            loader: 'awesome-typescript-loader'
        }
    ]
    : [
        {
            loader: 'react-hot-loader/webpack'
        }, {
            loader: 'awesome-typescript-loader'
        }
    ];

module.exports = {
    entry: IS_PRODUCTION
        ? ['./src/client/client.tsx']
        : [
            'webpack-hot-middleware/client', './src/client/client.tsx'
        ],
    output: {
        filename: 'client.js',
        path: path.resolve(__dirname, 'dist/client'),
        publicPath: '/'
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: IS_PRODUCTION ? "source-map" : "inline-source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    plugins,

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by
            // 'awesome-typescript-loader'.
            {
                test: /\.tsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: loaders
            },

            // All output '.js' files will have any sourcemaps re-processed by
            // 'source-map-loader'.
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: "source-map-loader",
                exclude: [/node_modules/, /build/, /__test__/]
            }
        ]
    }
};