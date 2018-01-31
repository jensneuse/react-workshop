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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-async-component");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const typesafe_actions_1 = __webpack_require__(29);
const initialState = {
    count: 0
};
exports.countersAction = {
    increment: typesafe_actions_1.createAction('INCREMENT'),
    add: typesafe_actions_1.createAction('ADD', (amount = 0) => ({
        type: 'ADD',
        payload: {
            amount
        }
    })),
    sub: typesafe_actions_1.createAction('SUB', (amount = 0) => ({
        type: 'SUB',
        payload: {
            amount
        }
    }))
};
exports.reducer = (state = initialState, action) => {
    switch (action.type) {
        case typesafe_actions_1.getType(exports.countersAction.increment):
            return Object.assign({}, state, { count: state.count + 1 });
        case typesafe_actions_1.getType(exports.countersAction.add):
            const addAction = action;
            return Object.assign({}, state, { count: state.count + addAction.payload.amount });
        case typesafe_actions_1.getType(exports.countersAction.sub):
            const subAction = action;
            return Object.assign({}, state, { count: state.count - subAction.payload.amount });
        default:
            return state;
    }
};


 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/jnsone11/repos/react-workshop/front-end/renderine/src/common/state/reducers/counter.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/jnsone11/repos/react-workshop/front-end/renderine/src/common/state/reducers/counter.ts"); } } })();

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const express = __webpack_require__(11);
const postgraphile_1 = __webpack_require__(12);
const serverRender_1 = __webpack_require__(13);
const IS_PRODUCTION = process.env.NODE_ENV === 'production';
const PORT = parseInt(process.env.PORT) || 8081;
const HOST = 'localhost';
const server = express();
server.use(postgraphile_1.postgraphile('postgres://postgres@localhost:15432/postgres', 'workshop', {
    graphiql: true,
    graphqlRoute: '/graphql'
}));
if (!IS_PRODUCTION) {
    const webpackDevMiddleware = __webpack_require__(32);
    const webpack = __webpack_require__(8);
    const webpackConfig = __webpack_require__(33);
    const compiler = webpack(webpackConfig);
    server.use(webpackDevMiddleware(compiler, {
        publicPath: "/",
        noInfo: true
    }));
    server.use(__webpack_require__(39)(compiler));
}
server.get('*', (req, res) => {
    const context = {};
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
/* 11 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("postgraphile");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const apollo_client_1 = __webpack_require__(14);
const react_apollo_1 = __webpack_require__(1);
const apollo_link_http_1 = __webpack_require__(15);
const react_router_1 = __webpack_require__(16);
const apollo_cache_inmemory_1 = __webpack_require__(17);
const react_async_component_1 = __webpack_require__(2);
const react_async_bootstrapper_1 = __webpack_require__(18);
const react_redux_1 = __webpack_require__(3);
const routes_1 = __webpack_require__(19);
const state_1 = __webpack_require__(31);
function default_1(url) {
    const link = new apollo_link_http_1.default({
        uri: 'http://localhost:8081/graphql'
    });
    const client = new apollo_client_1.default({
        ssrMode: true,
        link,
        cache: new apollo_cache_inmemory_1.InMemoryCache()
    });
    const routerContext = {};
    const asyncContext = react_async_component_1.createAsyncContext();
    const reduxStore = state_1.store();
    const App = (React.createElement(react_async_component_1.AsyncComponentProvider, { asyncContext: asyncContext },
        React.createElement(react_redux_1.Provider, { store: reduxStore },
            React.createElement(react_apollo_1.ApolloProvider, { client: client },
                React.createElement(react_router_1.StaticRouter, { location: url, context: routerContext },
                    React.createElement(routes_1.default, null))))));
    return new Promise((resolve, reject) => {
        react_async_bootstrapper_1.default(App).then(() => react_apollo_1.renderToStringWithData(App)
            .then((reactHtmlContent) => {
            const asyncState = JSON.stringify(asyncContext.getState());
            const initialState = JSON.stringify(client.extract()).replace(/</g, '\\u003c');
            const reduxState = JSON.stringify(reduxStore.getState());
            resolve(`<!DOCTYPE html>
                    <html>
                    <head>
                        <link rel="apple-touch-icon" sizes="57x57" href="/icon.png" />
                    </head>
                    <body>
                        <div id="react-root">${reactHtmlContent}</div>
                        <script>window.__APOLLO_STATE__=${initialState}</script>
                        <script>window.__ASYNC_STATE__=${asyncState}</script>
                        <script>window.__REDUX_STATE__=${reduxState}</script>
                        <script type="text/javascript" src="/vendor.js"></script>
                        <script type="text/javascript" src="/client.js"></script>
                    </body>
                    </html>`);
        }).catch((reason) => {
            reject(reason);
        }));
    });
}
exports.default = default_1;


 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/jnsone11/repos/react-workshop/front-end/renderine/src/server/serverRender.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/jnsone11/repos/react-workshop/front-end/renderine/src/server/serverRender.tsx"); } } })();

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("react-async-bootstrapper");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const react_1 = __webpack_require__(0);
const react_router_dom_1 = __webpack_require__(5);
const header_1 = __webpack_require__(20);
const home_1 = __webpack_require__(21);
const asyncAuthors_1 = __webpack_require__(22);
const allArticles_1 = __webpack_require__(24);
const asyncFatComponent_1 = __webpack_require__(25);
const statefulComponent_1 = __webpack_require__(28);
const anotherStatefulComponent_1 = __webpack_require__(30);
class Routes extends react_1.Component {
    render() {
        return React.createElement("div", null,
            React.createElement(header_1.default, null),
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: home_1.default }),
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/authors", component: asyncAuthors_1.default }),
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/articles", component: allArticles_1.default }),
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/fatComponent", component: asyncFatComponent_1.default }),
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/stateful", component: statefulComponent_1.default }),
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/anotherStateful", component: anotherStatefulComponent_1.default }));
    }
}
exports.default = Routes;


 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/jnsone11/repos/react-workshop/front-end/renderine/src/common/routes.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/jnsone11/repos/react-workshop/front-end/renderine/src/common/routes.tsx"); } } })();

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const react_1 = __webpack_require__(0);
const react_router_dom_1 = __webpack_require__(5);
const navigation = [
    {
        url: '/',
        title: 'Main'
    },
    {
        url: '/authors',
        title: 'Authors'
    },
    {
        url: '/articles',
        title: 'Articles'
    },
    {
        url: '/fatComponent',
        title: 'Fat Component'
    },
    {
        url: '/stateful',
        title: 'Stateful'
    },
    {
        url: '/anotherStateful',
        title: 'Another Stateful Component'
    }
];
class Header extends react_1.Component {
    render() {
        return (React.createElement("div", null,
            React.createElement("h1", null, "Header"),
            React.createElement("ul", null, navigation.map(item => (React.createElement("li", { key: item.url },
                React.createElement(react_router_dom_1.Link, { to: item.url }, item.title)))))));
    }
}
exports.default = Header;


 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/jnsone11/repos/react-workshop/front-end/renderine/src/common/components/header.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/jnsone11/repos/react-workshop/front-end/renderine/src/common/components/header.tsx"); } } })();

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const react_1 = __webpack_require__(0);
class Home extends react_1.Component {
    render() {
        return (React.createElement("div", null,
            React.createElement("p", null, "Main")));
    }
}
exports.default = Home;


 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/jnsone11/repos/react-workshop/front-end/renderine/src/common/components/home.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/jnsone11/repos/react-workshop/front-end/renderine/src/common/components/home.tsx"); } } })();

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const react_async_component_1 = __webpack_require__(2);
exports.default = react_async_component_1.asyncComponent({
    resolve: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 23))
});


 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/jnsone11/repos/react-workshop/front-end/renderine/src/common/components/asyncAuthors.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/jnsone11/repos/react-workshop/front-end/renderine/src/common/components/asyncAuthors.tsx"); } } })();

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const graphql_tag_1 = __webpack_require__(6);
const react_apollo_1 = __webpack_require__(1);
const query = graphql_tag_1.default `
    query getAllAuthors {
        allAuthors {
            totalCount
            nodes {
                nodeId
                id
                name
                articlesByAuthorId {
                    totalCount
                }
            }
        }
    }
`;
class AllAuthors extends React.Component {
    render() {
        if (this.props.data.loading) {
            return React.createElement("div", null, "Loading...");
        }
        else if (this.props.data.error) {
            return React.createElement("div", null,
                "Error: ",
                this.props.data.error.message);
        }
        return (React.createElement("div", null,
            React.createElement("h2", null, "Authors"),
            React.createElement("ul", null, this.props.data.allAuthors.nodes.map(author => (React.createElement("li", { key: author.nodeId },
                React.createElement("div", null,
                    "Name: ",
                    author.name),
                React.createElement("div", null,
                    "NumberOfArticles: ",
                    author.articlesByAuthorId.totalCount)))))));
    }
}
exports.default = react_apollo_1.graphql(query)(AllAuthors);


 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/jnsone11/repos/react-workshop/front-end/renderine/src/common/components/allAuthors.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/jnsone11/repos/react-workshop/front-end/renderine/src/common/components/allAuthors.tsx"); } } })();

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const react_1 = __webpack_require__(0);
const graphql_tag_1 = __webpack_require__(6);
const react_apollo_1 = __webpack_require__(1);
const query = graphql_tag_1.default `
    query getAllArticles {
        allArticles {
        totalCount
        nodes {
            nodeId
            id
            title
            description
            content
            authorId
            authorByAuthorId {
                id
                name
            }
        }
        }
    }  
`;
class AllArticles extends react_1.Component {
    render() {
        if (this.props.data.loading) {
            return React.createElement("div", null, "Loading...");
        }
        else if (this.props.data.error) {
            return React.createElement("div", null,
                "Error: ",
                this.props.data.error.message);
        }
        return (React.createElement("ul", null, this.props.data.allArticles.nodes.map(article => (React.createElement("div", { key: article.nodeId },
            React.createElement("h4", null, article.title),
            React.createElement("p", null, article.description),
            React.createElement("div", null,
                "Written by: ",
                article.authorByAuthorId.name))))));
    }
}
exports.default = react_apollo_1.graphql(query)(AllArticles);


 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/jnsone11/repos/react-workshop/front-end/renderine/src/common/components/allArticles.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/jnsone11/repos/react-workshop/front-end/renderine/src/common/components/allArticles.tsx"); } } })();

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const react_async_component_1 = __webpack_require__(2);
exports.default = react_async_component_1.asyncComponent({
    resolve: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 26))
});


 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/jnsone11/repos/react-workshop/front-end/renderine/src/common/components/asyncFatComponent.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/jnsone11/repos/react-workshop/front-end/renderine/src/common/components/asyncFatComponent.tsx"); } } })();

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const react_1 = __webpack_require__(0);
const react_render_image_1 = __webpack_require__(27);
const imageSrc = 'data:image/png;base64,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';
class FatComponent extends react_1.Component {
    render() {
        return (React.createElement("div", null,
            React.createElement(react_render_image_1.default, { src: imageSrc }, ({ image, loaded, errored }) => {
                if (!loaded) {
                    return React.createElement("div", null, "Loading...");
                }
                else if (errored) {
                    return React.createElement("div", null, "Error!");
                }
                return (React.createElement("img", { src: image.src, width: image.src, height: image.height }));
            })));
    }
}
exports.default = FatComponent;


 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/jnsone11/repos/react-workshop/front-end/renderine/src/common/components/fatComponent.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/jnsone11/repos/react-workshop/front-end/renderine/src/common/components/fatComponent.tsx"); } } })();

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("react-render-image");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const react_1 = __webpack_require__(0);
const react_redux_1 = __webpack_require__(3);
const counter_1 = __webpack_require__(4);
class StatefulComponent extends react_1.Component {
    constructor(props) {
        super(props);
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
    }
    increase() {
        console.log('increase');
        this.props.increment();
    }
    decrease() {
        console.log('decrease');
        this.props.sub(1);
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("h3", null, "Stateful Component"),
            React.createElement("p", null,
                "Count: ",
                this.props.count),
            React.createElement("button", { onClick: this.increase }, "increase counter"),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement("button", { onClick: this.decrease }, "decrease counter")));
    }
}
exports.default = react_redux_1.connect((state) => ({
    count: state.counter.count
}), {
    increment: counter_1.countersAction.increment,
    sub: counter_1.countersAction.sub
})(StatefulComponent);


 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/jnsone11/repos/react-workshop/front-end/renderine/src/common/components/statefulComponent.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/jnsone11/repos/react-workshop/front-end/renderine/src/common/components/statefulComponent.tsx"); } } })();

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("typesafe-actions");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const react_1 = __webpack_require__(0);
const react_redux_1 = __webpack_require__(3);
const counter_1 = __webpack_require__(4);
class AnotherStatefulComponent extends react_1.Component {
    constructor(props) {
        super(props);
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
    }
    increase() {
        console.log('increase');
        this.props.increment();
    }
    decrease() {
        console.log('decrease');
        this.props.sub(1);
    }
    render() {
        console.log('stateful', this.props);
        return (React.createElement("div", null,
            React.createElement("h3", null, "Another Stateful Component"),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement("p", null,
                "Count: ",
                this.props.count),
            React.createElement("button", { onClick: this.decrease }, "decrease counter"),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement("button", { onClick: this.increase }, "increase counter")));
    }
}
exports.default = react_redux_1.connect((state) => ({
    count: state.counter.count
}), {
    increment: counter_1.countersAction.increment,
    sub: counter_1.countersAction.sub
})(AnotherStatefulComponent);


 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/jnsone11/repos/react-workshop/front-end/renderine/src/common/components/anotherStatefulComponent.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/jnsone11/repos/react-workshop/front-end/renderine/src/common/components/anotherStatefulComponent.tsx"); } } })();

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = __webpack_require__(7);
const redux_2 = __webpack_require__(7);
const counter_1 = __webpack_require__(4);
const reducers = redux_1.combineReducers({
    counter: counter_1.reducer
});
exports.store = (initialState) => redux_2.createStore(reducers, initialState);


 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/jnsone11/repos/react-workshop/front-end/renderine/src/common/state/index.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/jnsone11/repos/react-workshop/front-end/renderine/src/common/state/index.ts"); } } })();

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("webpack-dev-middleware");

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {const path = __webpack_require__(34);
const webpack = __webpack_require__(8);

const UglifyJSPlugin = __webpack_require__(35);
const ExtractTextPlugin = __webpack_require__(36);
const StatsWriterPlugin = __webpack_require__(37).StatsWriterPlugin;
const BundleAnalyzerPlugin = __webpack_require__(38).BundleAnalyzerPlugin;

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
    }),
    /*new webpack
        .optimize
        .AggressiveMergingPlugin(),
    new webpack
        .optimize
        .OccurrenceOrderPlugin(),
    new UglifyJSPlugin(),
    new webpack.LoaderOptionsPlugin({minimize: true, debug: false}),
    new CompressionPlugin({
        asset: "[path].gz[query]",
        algorithm: "gzip",
        test: /\.(js|html|css)$/,
        threshold: 0,
        minRatio: 0.8
    })*/
];

if (IS_PRODUCTION) {
    plugins.push(new BundleAnalyzerPlugin({analyzerMode: 'static'}));
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
    devtool: "inline-source-map",

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
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("uglifyjs-webpack-plugin");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("extract-text-webpack-plugin");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("webpack-stats-plugin");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("webpack-bundle-analyzer");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("webpack-hot-middleware");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map