/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const express = __webpack_require__(3);
const serverRender_1 = __webpack_require__(4);
const IS_PRODUCTION = process.env.NODE_ENV === 'production';
const PORT = parseInt(process.env.PORT) || 8080;
const HOST = 'localhost';
const server = express();
if (!IS_PRODUCTION) {
    const webpackDevMiddleware = __webpack_require__(6);
    const webpack = __webpack_require__(1);
    const webpackConfig = __webpack_require__(7);
    const compiler = webpack(webpackConfig);
    server.use(webpackDevMiddleware(compiler, {
        publicPath: "/",
        noInfo: true
    }));
    server.use(__webpack_require__(13)(compiler));
}
server.get('*', (req, res) => {
    serverRender_1.default(req.url).then((html) => {
        res.status(200);
        res.end(html);
    }).catch((e) => {
        console.log('Error rendering: ', e);
        res.status(500);
        res.end();
    });
});
server.listen(PORT, HOST, () => {
    console.log(`listening on: ${HOST}:${PORT}`);
});


 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/jnsone11/repos/react-workshop/front-end/renderine/src/server/server.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/jnsone11/repos/react-workshop/front-end/renderine/src/server/server.tsx"); } } })();

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
//import {renderToString} from "react-dom/server"
const routes_1 = __webpack_require__(5);
function default_1(url) {
    const App = (React.createElement("div", null,
        React.createElement(routes_1.default, null)));
    //const applicationHTML = renderToString(App);
    return new Promise((resolve, reject) => {
        resolve(`<!DOCTYPE html>
        <html>
        <head>
            <link rel="apple-touch-icon" sizes="57x57" href="/icon.png" />
        </head>
        <body>
            <div id="react-root"></div>
            <script type="text/javascript" src="/vendor.js"></script>
            <script type="text/javascript" src="/client.js"></script>
        </body>
        </html>`);
    });
}
exports.default = default_1;


 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/jnsone11/repos/react-workshop/front-end/renderine/src/server/serverRender.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/jnsone11/repos/react-workshop/front-end/renderine/src/server/serverRender.tsx"); } } })();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const react_1 = __webpack_require__(0);
class Routes extends react_1.Component {
    render() {
        return (React.createElement("div", null, "Hello World !!!"));
    }
}
exports.default = Routes;


 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/jnsone11/repos/react-workshop/front-end/renderine/src/common/routes.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/jnsone11/repos/react-workshop/front-end/renderine/src/common/routes.tsx"); } } })();

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("webpack-dev-middleware");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {const path = __webpack_require__(8);
const webpack = __webpack_require__(1);

const UglifyJSPlugin = __webpack_require__(9);
const ExtractTextPlugin = __webpack_require__(10);
const StatsWriterPlugin = __webpack_require__(11).StatsWriterPlugin;
const BundleAnalyzerPlugin = __webpack_require__(12).BundleAnalyzerPlugin;

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

console.log('IS_PRODUCTION: ',IS_PRODUCTION);

let plugins = [
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: 'vendor.js',
        minChunks: function (module, count) {
            return module.context && module.context.indexOf("node_modules") !== -1;
        }
    }),
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('production'),
        }
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new UglifyJSPlugin(),
    new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
    }),
    /*new CompressionPlugin({
        asset: "[path].gz[query]",
        algorithm: "gzip",
        test: /\.(js|html|css)$/,
        threshold: 0,
        minRatio: 0.8
    })*/
];

if (IS_PRODUCTION) {
    plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'static'
    }));
} else {
    plugins.push(new webpack.HotModuleReplacementPlugin());
    plugins.push(new webpack.NoEmitOnErrorsPlugin());
}

const loaders = IS_PRODUCTION ?
    [
        {
            loader: 'awesome-typescript-loader'
        }
    ] :
    [
        {
            loader: 'react-hot-loader/webpack'
        },
        {
            loader: 'awesome-typescript-loader'
        }
    ];

module.exports = {
    entry: IS_PRODUCTION ? [
        './src/client/client.tsx'
    ] : [
        'webpack-hot-middleware/client',
        './src/client/client.tsx'
    ],
    output: {
        filename: 'client.js',
        path: path.resolve(__dirname, 'dist/client'),
        publicPath: '/'
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "cheap-module-source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    plugins,

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.tsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: loaders
            },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {enforce: "pre", test: /\.js$/, loader: "source-map-loader"}
        ]
    }
};
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("uglifyjs-webpack-plugin");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("extract-text-webpack-plugin");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("webpack-stats-plugin");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("webpack-bundle-analyzer");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("webpack-hot-middleware");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map