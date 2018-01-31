webpackJsonp([2],{

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const react_1 = __webpack_require__(0);
const react_router_dom_1 = __webpack_require__(17);
class Header extends react_1.Component {
    render() {
        return (React.createElement("div", null,
            React.createElement("h1", null, "Header"),
            React.createElement("ul", null,
                React.createElement("li", null,
                    React.createElement(react_router_dom_1.Link, { to: "/" }, "Main")),
                React.createElement("li", null,
                    React.createElement(react_router_dom_1.Link, { to: "/authors" }, "Authors")),
                React.createElement("li", null,
                    React.createElement(react_router_dom_1.Link, { to: "/articles" }, "Articles")),
                React.createElement("li", null,
                    React.createElement(react_router_dom_1.Link, { to: "/fatComponent" }, "Fat Component")))));
    }
}
exports.default = Header;


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Users\\Jens.Neuse\\repos\\react-workshop\\front-end\\renderine\\src\\common\\components\\header.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Jens.Neuse\\repos\\react-workshop\\front-end\\renderine\\src\\common\\components\\header.tsx"); } } })();

/***/ }),

/***/ 198:
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


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Users\\Jens.Neuse\\repos\\react-workshop\\front-end\\renderine\\src\\common\\components\\home.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Jens.Neuse\\repos\\react-workshop\\front-end\\renderine\\src\\common\\components\\home.tsx"); } } })();

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const react_async_component_1 = __webpack_require__(32);
exports.default = react_async_component_1.asyncComponent({
    resolve: () => __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 218))
});


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Users\\Jens.Neuse\\repos\\react-workshop\\front-end\\renderine\\src\\common\\components\\asyncAuthors.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Jens.Neuse\\repos\\react-workshop\\front-end\\renderine\\src\\common\\components\\asyncAuthors.tsx"); } } })();

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const react_1 = __webpack_require__(0);
const graphql_tag_1 = __webpack_require__(74);
const react_apollo_1 = __webpack_require__(38);
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


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Users\\Jens.Neuse\\repos\\react-workshop\\front-end\\renderine\\src\\common\\components\\allArticles.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Jens.Neuse\\repos\\react-workshop\\front-end\\renderine\\src\\common\\components\\allArticles.tsx"); } } })();

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const react_async_component_1 = __webpack_require__(32);
exports.default = react_async_component_1.asyncComponent({
    resolve: () => __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 219))
});


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Users\\Jens.Neuse\\repos\\react-workshop\\front-end\\renderine\\src\\common\\components\\asyncFatComponent.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Jens.Neuse\\repos\\react-workshop\\front-end\\renderine\\src\\common\\components\\asyncFatComponent.tsx"); } } })();

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = __webpack_require__(34);
const redux_2 = __webpack_require__(34);
const counter_1 = __webpack_require__(212);
const reducers = redux_1.combineReducers({
    counter: counter_1.reducer
});
exports.store = redux_2.createStore(reducers);


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Users\\Jens.Neuse\\repos\\react-workshop\\front-end\\renderine\\src\\common\\state\\index.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Jens.Neuse\\repos\\react-workshop\\front-end\\renderine\\src\\common\\state\\index.ts"); } } })();

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const typesafe_actions_1 = __webpack_require__(213);
const initialState = {
    count: 0
};
exports.countersAction = {
    increment: typesafe_actions_1.createAction('INCREMENT'),
    add: typesafe_actions_1.createAction('ADD', (amount) => ({
        type: 'ADD',
        payload: {
            amount
        }
    })),
    sub: typesafe_actions_1.createAction('SUB', (amount) => ({
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


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Users\\Jens.Neuse\\repos\\react-workshop\\front-end\\renderine\\src\\common\\state\\reducers\\counter.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Jens.Neuse\\repos\\react-workshop\\front-end\\renderine\\src\\common\\state\\reducers\\counter.ts"); } } })();

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const react_1 = __webpack_require__(0);
const react_router_dom_1 = __webpack_require__(17);
const header_1 = __webpack_require__(197);
const home_1 = __webpack_require__(198);
const asyncAuthors_1 = __webpack_require__(199);
const allArticles_1 = __webpack_require__(209);
const asyncFatComponent_1 = __webpack_require__(210);
class Routes extends react_1.Component {
    render() {
        return React.createElement("div", null,
            React.createElement(header_1.default, null),
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: home_1.default }),
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/authors", component: asyncAuthors_1.default }),
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/articles", component: allArticles_1.default }),
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/fatComponent", component: asyncFatComponent_1.default }));
    }
}
exports.default = Routes;


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Users\\Jens.Neuse\\repos\\react-workshop\\front-end\\renderine\\src\\common\\routes.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Jens.Neuse\\repos\\react-workshop\\front-end\\renderine\\src\\common\\routes.tsx"); } } })();

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(76);
module.exports = __webpack_require__(85);


/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const react_dom_1 = __webpack_require__(88);
const react_router_dom_1 = __webpack_require__(17);
const react_apollo_1 = __webpack_require__(38);
const apollo_link_http_1 = __webpack_require__(132);
const apollo_client_1 = __webpack_require__(150);
const apollo_cache_inmemory_1 = __webpack_require__(162);
const react_async_component_1 = __webpack_require__(32);
const react_async_bootstrapper_1 = __webpack_require__(173);
const react_redux_1 = __webpack_require__(175);
const routes_1 = __webpack_require__(36);
const state_1 = __webpack_require__(211);
const apolloClient = new apollo_client_1.default({
    link: new apollo_link_http_1.default({ uri: "/graphql" }),
    cache: new apollo_cache_inmemory_1.InMemoryCache().restore(window.__APOLLO_STATE__)
});
const reactRoot = document.getElementById('react-root');
const render = (Routings) => {
    return (React.createElement(react_async_component_1.AsyncComponentProvider, { rehydrateState: window.__ASYNC_STATE__ },
        React.createElement(react_redux_1.Provider, { store: state_1.store },
            React.createElement(react_apollo_1.ApolloProvider, { client: apolloClient },
                React.createElement(react_router_dom_1.BrowserRouter, null,
                    React.createElement(Routings, null))))));
};
if (true) {
    module.hot.accept(36, () => {
        Promise.resolve().then(() => __webpack_require__(36)).then((module) => {
            react_dom_1.hydrate(render(module.default), reactRoot);
        });
    });
}
const App = render(routes_1.default);
react_async_bootstrapper_1.default(App)
    .then(() => react_dom_1.hydrate(App, reactRoot));
//delete window.__APOLLO_STATE__;
//delete window.__ASYNC_STATE__; 


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Users\\Jens.Neuse\\repos\\react-workshop\\front-end\\renderine\\src\\client\\client.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Jens.Neuse\\repos\\react-workshop\\front-end\\renderine\\src\\client\\client.tsx"); } } })();

/***/ })

},[75]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2NvbXBvbmVudHMvaGVhZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2NvbXBvbmVudHMvaG9tZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jb21wb25lbnRzL2FzeW5jQXV0aG9ycy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jb21wb25lbnRzL2FsbEFydGljbGVzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2NvbXBvbmVudHMvYXN5bmNGYXRDb21wb25lbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21tb24vc3RhdGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9zdGF0ZS9yZWR1Y2Vycy9jb3VudGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vcm91dGVzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NsaWVudC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxxQ0FBOEI7QUFDOUIsdUNBQStCO0FBQy9CLG1EQUFxQztBQUVyQyxZQUFhLFNBQVEsaUJBQVM7SUFDMUIsTUFBTTtRQUNGLE1BQU0sQ0FBQyxDQUNIO1lBQ0kseUNBQWU7WUFDZjtnQkFDSTtvQkFDSSxvQkFBQyx1QkFBSSxJQUFDLEVBQUUsRUFBQyxHQUFHLFdBQVksQ0FDdkI7Z0JBQ0w7b0JBQ0ksb0JBQUMsdUJBQUksSUFBQyxFQUFFLEVBQUMsVUFBVSxjQUFlLENBQ2pDO2dCQUNMO29CQUNJLG9CQUFDLHVCQUFJLElBQUMsRUFBRSxFQUFDLFdBQVcsZUFBZ0IsQ0FDbkM7Z0JBQ0w7b0JBQ0ksb0JBQUMsdUJBQUksSUFBQyxFQUFFLEVBQUMsZUFBZSxvQkFBcUIsQ0FDNUMsQ0FDSixDQUNILENBQ1Q7SUFDTCxDQUFDO0NBQ0o7QUFFRCxrQkFBZSxNQUFNLENBQUM7Ozs7Ozs7Ozs7Ozs7QUM1QnRCLHFDQUE4QjtBQUM5Qix1Q0FBK0I7QUFFL0IsVUFBVyxTQUFRLGlCQUFTO0lBQ3hCLE1BQU07UUFDRixNQUFNLENBQUMsQ0FDSDtZQUNJLHNDQUVJLENBQ0YsQ0FDVDtJQUNMLENBQUM7Q0FDSjtBQUVELGtCQUFlLElBQUksQ0FBQzs7Ozs7Ozs7Ozs7OztBQ2RwQix3REFBdUQ7QUFFdkQsa0JBQWUsc0NBQWMsQ0FBQztJQUMxQixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsZ0ZBQWlDO0NBQ25ELENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ0xILHFDQUE4QjtBQUM5Qix1Q0FBK0I7QUFDL0IsOENBQThCO0FBRTlCLCtDQUFtRDtBQUVuRCxNQUFNLEtBQUssR0FBRyxxQkFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBa0JoQjtBQUtELGlCQUFrQixTQUFRLGlCQUFnQjtJQUN0QyxNQUFNO1FBRUYsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUM7WUFDekIsTUFBTSxDQUFDLDhDQUFxQjtRQUNoQyxDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFDO1lBQzlCLE1BQU0sQ0FBQzs7Z0JBQWEsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBTztRQUM1RCxDQUFDO1FBRUQsTUFBTSxDQUFDLENBQ0gsZ0NBRVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUM3Qyw2QkFBSyxHQUFHLEVBQUUsT0FBTyxDQUFDLE1BQU07WUFDcEIsZ0NBQUssT0FBTyxDQUFDLEtBQUssQ0FBTTtZQUN4QiwrQkFBSSxPQUFPLENBQUMsV0FBVyxDQUFLO1lBQzVCOztnQkFBa0IsT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBTyxDQUNwRCxDQUNULENBQUMsQ0FFTCxDQUNSLENBQUM7SUFDTixDQUFDO0NBQ0o7QUFFRCxrQkFBZSxzQkFBTyxDQUErQixLQUFLLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3JEekUsd0RBQXVEO0FBRXZELGtCQUFlLHNDQUFjLENBQUM7SUFDMUIsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLGdGQUFtQztDQUNyRCxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNMSCx3Q0FBcUM7QUFDckMsd0NBQWtDO0FBQ2xDLDJDQUE0RDtBQUU1RCxNQUFNLFFBQVEsR0FBRyx1QkFBZSxDQUFDO0lBQzdCLE9BQU8sRUFBRSxpQkFBYztDQUMxQixDQUFDLENBQUM7QUFFVSxhQUFLLEdBQUcsbUJBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ1AzQyxvREFBc0Q7QUFNdEQsTUFBTSxZQUFZLEdBQVU7SUFDeEIsS0FBSyxFQUFFLENBQUM7Q0FDWDtBQWdCWSxzQkFBYyxHQUFHO0lBQzFCLFNBQVMsRUFBRSwrQkFBWSxDQUFDLFdBQVcsQ0FBQztJQUNwQyxHQUFHLEVBQUUsK0JBQVksQ0FBQyxLQUFLLEVBQUMsQ0FBQyxNQUFjLEVBQVksRUFBRSxDQUFDLENBQUM7UUFDbkQsSUFBSSxFQUFFLEtBQUs7UUFDWCxPQUFPLEVBQUU7WUFDTCxNQUFNO1NBQ1Q7S0FDSixDQUFDLENBQUM7SUFDSCxHQUFHLEVBQUUsK0JBQVksQ0FBQyxLQUFLLEVBQUMsQ0FBQyxNQUFjLEVBQVksRUFBRSxDQUFDLENBQUM7UUFDbkQsSUFBSSxFQUFFLEtBQUs7UUFDWCxPQUFPLEVBQUU7WUFDTCxNQUFNO1NBQ1Q7S0FDSixDQUFDLENBQUM7Q0FDTjtBQUVZLGVBQU8sR0FBRyxDQUFDLFFBQWUsWUFBWSxFQUFFLE1BQWMsRUFBUSxFQUFFO0lBQ3pFLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQztRQUNqQixLQUFLLDBCQUFPLENBQUMsc0JBQWMsQ0FBQyxTQUFTLENBQUM7WUFDbEMsTUFBTSxtQkFDQyxLQUFLLElBQ1IsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLEdBQUUsQ0FBQyxJQUN4QjtRQUNMLEtBQUssMEJBQU8sQ0FBQyxzQkFBYyxDQUFDLEdBQUcsQ0FBQztZQUM1QixNQUFNLFNBQVMsR0FBRyxNQUFtQixDQUFDO1lBQ3RDLE1BQU0sbUJBQ0MsS0FBSyxJQUNSLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUNoRDtRQUNMLEtBQUssMEJBQU8sQ0FBQyxzQkFBYyxDQUFDLEdBQUcsQ0FBQztZQUM1QixNQUFNLFNBQVMsR0FBRyxNQUFtQixDQUFDO1lBQ3RDLE1BQU0sbUJBQ0MsS0FBSyxJQUNSLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUNoRDtRQUNMO1lBQ0ksTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNyQixDQUFDO0FBQ0wsQ0FBQzs7Ozs7Ozs7Ozs7OztBQy9ERCxxQ0FBOEI7QUFDOUIsdUNBQStCO0FBQy9CLG1EQUFzQztBQUV0QywwQ0FBd0M7QUFDeEMsd0NBQW9DO0FBQ3BDLGdEQUFrRDtBQUNsRCwrQ0FBa0Q7QUFDbEQscURBQXlEO0FBRXpELFlBQWEsU0FBUSxpQkFBUztJQUMxQixNQUFNO1FBQ0YsTUFBTSxDQUFDO1lBQ0Msb0JBQUMsZ0JBQU0sT0FBRTtZQUNULG9CQUFDLHdCQUFLLElBQUMsS0FBSyxRQUFDLElBQUksRUFBQyxHQUFHLEVBQUMsU0FBUyxFQUFFLGNBQUksR0FBSTtZQUN6QyxvQkFBQyx3QkFBSyxJQUFDLEtBQUssUUFBQyxJQUFJLEVBQUMsVUFBVSxFQUFDLFNBQVMsRUFBRSxzQkFBVSxHQUFHO1lBQ3JELG9CQUFDLHdCQUFLLElBQUMsS0FBSyxRQUFDLElBQUksRUFBQyxXQUFXLEVBQUMsU0FBUyxFQUFFLHFCQUFXLEdBQUc7WUFDdkQsb0JBQUMsd0JBQUssSUFBQyxLQUFLLFFBQUMsSUFBSSxFQUFDLGVBQWUsRUFBQyxTQUFTLEVBQUUsMkJBQVksR0FBRyxDQUMxRDtJQUNkLENBQUM7Q0FDSjtBQUVELGtCQUFlLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCdEIscUNBQThCO0FBRTlCLDRDQUFtQztBQUNuQyxtREFBMEQ7QUFDMUQsK0NBQThDO0FBQzlDLG9EQUF3QztBQUN4QyxpREFBeUM7QUFDekMseURBQXNEO0FBQ3RELHdEQUFrRjtBQUNsRiw0REFBd0Q7QUFDeEQsK0NBQXNDO0FBRXRDLHlDQUFxQztBQUNyQyx5Q0FBdUM7QUFhdkMsTUFBTSxZQUFZLEdBQUcsSUFBSSx1QkFBWSxDQUFDO0lBQ2xDLElBQUksRUFBRSxJQUFJLDBCQUFRLENBQUMsRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLENBQUM7SUFDdkMsS0FBSyxFQUFFLElBQUkscUNBQWEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUM7Q0FDOUQsQ0FBQyxDQUFDO0FBRUgsTUFBTSxTQUFTLEdBQWdCLFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7QUFFckUsTUFBTSxNQUFNLEdBQUcsQ0FBQyxRQUE4QixFQUFFLEVBQUU7SUFDOUMsTUFBTSxDQUFDLENBQ0gsb0JBQUMsOENBQXNCLElBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxlQUFlO1FBQzFELG9CQUFDLHNCQUFRLElBQUMsS0FBSyxFQUFFLGFBQUs7WUFDbEIsb0JBQUMsNkJBQWMsSUFBQyxNQUFNLEVBQUUsWUFBWTtnQkFDaEMsb0JBQUMsZ0NBQU07b0JBQ0gsb0JBQUMsUUFBUSxPQUFFLENBQ04sQ0FDSSxDQUNWLENBQ1UsQ0FDNUI7QUFDTCxDQUFDO0FBRUQsRUFBRSxDQUFDLENBQUMsSUFBVSxDQUFDLENBQUMsQ0FBQztJQUNiLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQWtCLEVBQUUsR0FBRyxFQUFFO1FBQ3ZDLGlEQUFPLEVBQWtCLEdBQUUsSUFBSSxDQUFDLENBQUMsTUFBVyxFQUFFLEVBQUU7WUFDNUMsbUJBQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLFNBQVMsQ0FBQztRQUM5QyxDQUFDLENBQUM7SUFDTixDQUFDLENBQUM7QUFDTixDQUFDO0FBRUQsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLGdCQUFNLENBQUMsQ0FBQztBQUMzQixrQ0FBaUIsQ0FBQyxHQUFHLENBQUM7S0FDakIsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLG1CQUFPLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7QUFFekMsaUNBQWlDO0FBQ2pDLGdDQUFnQyIsImZpbGUiOiJjbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcblxyXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aDE+SGVhZGVyPC9oMT5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiPk1haW48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2F1dGhvcnNcIj5BdXRob3JzPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9hcnRpY2xlc1wiPkFydGljbGVzPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9mYXRDb21wb25lbnRcIj5GYXQgQ29tcG9uZW50PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbW9uL2NvbXBvbmVudHMvaGVhZGVyLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXHJcblxyXG5jbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICBNYWluXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbW9uL2NvbXBvbmVudHMvaG9tZS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGFzeW5jQ29tcG9uZW50IH0gZnJvbSAncmVhY3QtYXN5bmMtY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jQ29tcG9uZW50KHtcclxuICAgIHJlc29sdmU6ICgpID0+IFN5c3RlbS5pbXBvcnQoJy4vYWxsQXV0aG9ycy50c3gnKVxyXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbW9uL2NvbXBvbmVudHMvYXN5bmNBdXRob3JzLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQge2dldEFsbEFydGljbGVzUXVlcnl9IGZyb20gJy4uLy4uLy4uL2dyYXBocWwtdHlwZXMnXHJcbmltcG9ydCB7IGdyYXBocWwsIFF1ZXJ5UHJvcHMgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xyXG5cclxuY29uc3QgcXVlcnkgPSBncWxgXHJcbiAgICBxdWVyeSBnZXRBbGxBcnRpY2xlcyB7XHJcbiAgICAgICAgYWxsQXJ0aWNsZXMge1xyXG4gICAgICAgIHRvdGFsQ291bnRcclxuICAgICAgICBub2RlcyB7XHJcbiAgICAgICAgICAgIG5vZGVJZFxyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvblxyXG4gICAgICAgICAgICBjb250ZW50XHJcbiAgICAgICAgICAgIGF1dGhvcklkXHJcbiAgICAgICAgICAgIGF1dGhvckJ5QXV0aG9ySWQge1xyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9ICBcclxuYFxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgZGF0YTogUXVlcnlQcm9wcyAmIGdldEFsbEFydGljbGVzUXVlcnlcclxufVxyXG5cclxuY2xhc3MgQWxsQXJ0aWNsZXMgZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHM+IHtcclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZGF0YS5sb2FkaW5nKXtcclxuICAgICAgICAgICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5kYXRhLmVycm9yKXtcclxuICAgICAgICAgICAgcmV0dXJuIDxkaXY+RXJyb3I6IHt0aGlzLnByb3BzLmRhdGEuZXJyb3IubWVzc2FnZX08L2Rpdj5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRhdGEuYWxsQXJ0aWNsZXMubm9kZXMubWFwKGFydGljbGUgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YXJ0aWNsZS5ub2RlSWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PnthcnRpY2xlLnRpdGxlfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57YXJ0aWNsZS5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PldyaXR0ZW4gYnk6IHthcnRpY2xlLmF1dGhvckJ5QXV0aG9ySWQubmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBncmFwaHFsPGdldEFsbEFydGljbGVzUXVlcnksUHJvcHMse30+KHF1ZXJ5KShBbGxBcnRpY2xlcyk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1vbi9jb21wb25lbnRzL2FsbEFydGljbGVzLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgYXN5bmNDb21wb25lbnQgfSBmcm9tICdyZWFjdC1hc3luYy1jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmNDb21wb25lbnQoe1xyXG4gICAgcmVzb2x2ZTogKCkgPT4gU3lzdGVtLmltcG9ydCgnLi9mYXRDb21wb25lbnQudHN4JylcclxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1vbi9jb21wb25lbnRzL2FzeW5jRmF0Q29tcG9uZW50LnRzeCIsImltcG9ydCB7Y29tYmluZVJlZHVjZXJzfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IHtjcmVhdGVTdG9yZX0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB7cmVkdWNlciBhcyBjb3VudGVyUmVkdWNlcn0gZnJvbSAnLi9yZWR1Y2Vycy9jb3VudGVyJ1xyXG5cclxuY29uc3QgcmVkdWNlcnMgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgY291bnRlcjogY291bnRlclJlZHVjZXJcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2Vycyk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1vbi9zdGF0ZS9pbmRleC50cyIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQge2NyZWF0ZUFjdGlvbiwgZ2V0VHlwZX0gZnJvbSAndHlwZXNhZmUtYWN0aW9ucydcclxuXHJcbmludGVyZmFjZSBTdGF0ZSB7XHJcbiAgICBjb3VudDpudW1iZXJcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuICAgIGNvdW50OiAwXHJcbn1cclxuXHJcbmludGVyZmFjZSBBZGRBY3Rpb24gZXh0ZW5kcyBBY3Rpb24ge1xyXG4gICAgdHlwZTogJ0FERCcsXHJcbiAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgYW1vdW50OiBudW1iZXJcclxuICAgIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIFN1YkFjdGlvbiBleHRlbmRzIEFjdGlvbiB7XHJcbiAgICB0eXBlOiAnU1VCJyxcclxuICAgIHBheWxvYWQ6IHtcclxuICAgICAgICBhbW91bnQ6IG51bWJlclxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY291bnRlcnNBY3Rpb24gPSB7XHJcbiAgICBpbmNyZW1lbnQ6IGNyZWF0ZUFjdGlvbignSU5DUkVNRU5UJyksXHJcbiAgICBhZGQ6IGNyZWF0ZUFjdGlvbignQUREJywoYW1vdW50OiBudW1iZXIpOkFkZEFjdGlvbiA9PiAoe1xyXG4gICAgICAgIHR5cGU6ICdBREQnLFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgYW1vdW50XHJcbiAgICAgICAgfVxyXG4gICAgfSkpLFxyXG4gICAgc3ViOiBjcmVhdGVBY3Rpb24oJ1NVQicsKGFtb3VudDogbnVtYmVyKTpTdWJBY3Rpb24gPT4gKHtcclxuICAgICAgICB0eXBlOiAnU1VCJyxcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIGFtb3VudFxyXG4gICAgICAgIH1cclxuICAgIH0pKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVkdWNlciA9IChzdGF0ZTogU3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogQWN0aW9uKTpTdGF0ZSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKXtcclxuICAgICAgICBjYXNlIGdldFR5cGUoY291bnRlcnNBY3Rpb24uaW5jcmVtZW50KTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY291bnQ6IHN0YXRlLmNvdW50ICsxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIGdldFR5cGUoY291bnRlcnNBY3Rpb24uYWRkKTpcclxuICAgICAgICAgICAgY29uc3QgYWRkQWN0aW9uID0gYWN0aW9uIGFzIEFkZEFjdGlvbjtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY291bnQ6IHN0YXRlLmNvdW50ICsgYWRkQWN0aW9uLnBheWxvYWQuYW1vdW50XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIGdldFR5cGUoY291bnRlcnNBY3Rpb24uc3ViKTpcclxuICAgICAgICAgICAgY29uc3Qgc3ViQWN0aW9uID0gYWN0aW9uIGFzIFN1YkFjdGlvbjtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY291bnQ6IHN0YXRlLmNvdW50IC0gc3ViQWN0aW9uLnBheWxvYWQuYW1vdW50XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbW9uL3N0YXRlL3JlZHVjZXJzL2NvdW50ZXIudHMiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge1JvdXRlfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5cclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyJ1xyXG5pbXBvcnQgTWFpbiBmcm9tICcuL2NvbXBvbmVudHMvaG9tZSdcclxuaW1wb3J0IEFsbEF1dGhvcnMgZnJvbSAnLi9jb21wb25lbnRzL2FzeW5jQXV0aG9ycydcclxuaW1wb3J0IEFsbEFydGljbGVzIGZyb20gJy4vY29tcG9uZW50cy9hbGxBcnRpY2xlcydcclxuaW1wb3J0IEZhdENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvYXN5bmNGYXRDb21wb25lbnQnXHJcblxyXG5jbGFzcyBSb3V0ZXMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyLz5cclxuICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL1wiIGNvbXBvbmVudD17TWFpbn0gLz5cclxuICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL2F1dGhvcnNcIiBjb21wb25lbnQ9e0FsbEF1dGhvcnN9Lz5cclxuICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL2FydGljbGVzXCIgY29tcG9uZW50PXtBbGxBcnRpY2xlc30vPlxyXG4gICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvZmF0Q29tcG9uZW50XCIgY29tcG9uZW50PXtGYXRDb21wb25lbnR9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJvdXRlcztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tbW9uL3JvdXRlcy50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGh5ZHJhdGUgfSBmcm9tICdyZWFjdC1kb20nXHJcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xyXG5pbXBvcnQgSHR0cExpbmsgZnJvbSBcImFwb2xsby1saW5rLWh0dHBcIjtcclxuaW1wb3J0IEFwb2xsb0NsaWVudCBmcm9tIFwiYXBvbGxvLWNsaWVudFwiO1xyXG5pbXBvcnQgeyBJbk1lbW9yeUNhY2hlIH0gZnJvbSBcImFwb2xsby1jYWNoZS1pbm1lbW9yeVwiO1xyXG5pbXBvcnQgeyBBc3luY0NvbXBvbmVudFByb3ZpZGVyLCBjcmVhdGVBc3luY0NvbnRleHQgfSBmcm9tICdyZWFjdC1hc3luYy1jb21wb25lbnQnXHJcbmltcG9ydCBhc3luY0Jvb3RzdHJhcHBlciBmcm9tICdyZWFjdC1hc3luYy1ib290c3RyYXBwZXInXHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcblxyXG5pbXBvcnQgUm91dGVzIGZyb20gJy4uL2NvbW1vbi9yb3V0ZXMnXHJcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSAnLi4vY29tbW9uL3N0YXRlJ1xyXG5cclxuZGVjbGFyZSBsZXQgd2luZG93OiB7XHJcbiAgICBfX0FQT0xMT19TVEFURV9fOiBhbnksXHJcbiAgICBfX0FTWU5DX1NUQVRFX186IGFueVxyXG59XHJcblxyXG5kZWNsYXJlIGxldCBtb2R1bGU6IHtcclxuICAgIGhvdDoge1xyXG4gICAgICAgIGFjY2VwdDogKHBhdGg6IGFueSwgZm46ICgpID0+IGFueSkgPT4gYW55XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGFwb2xsb0NsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xyXG4gICAgbGluazogbmV3IEh0dHBMaW5rKHsgdXJpOiBcIi9ncmFwaHFsXCIgfSksXHJcbiAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKS5yZXN0b3JlKHdpbmRvdy5fX0FQT0xMT19TVEFURV9fKVxyXG59KTtcclxuXHJcbmNvbnN0IHJlYWN0Um9vdDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhY3Qtcm9vdCcpO1xyXG5cclxuY29uc3QgcmVuZGVyID0gKFJvdXRpbmdzOiBSZWFjdC5Db21wb25lbnRDbGFzcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QXN5bmNDb21wb25lbnRQcm92aWRlciByZWh5ZHJhdGVTdGF0ZT17d2luZG93Ll9fQVNZTkNfU1RBVEVfX30gPlxyXG4gICAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICAgICAgICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2Fwb2xsb0NsaWVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRpbmdzLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1JvdXRlcj5cclxuICAgICAgICAgICAgICAgIDwvQXBvbGxvUHJvdmlkZXI+XHJcbiAgICAgICAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICAgICAgPC9Bc3luY0NvbXBvbmVudFByb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5pZiAobW9kdWxlLmhvdCkge1xyXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoJy4uL2NvbW1vbi9yb3V0ZXMnLCAoKSA9PiB7XHJcbiAgICAgICAgaW1wb3J0KCcuLi9jb21tb24vcm91dGVzJykudGhlbigobW9kdWxlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgaHlkcmF0ZShyZW5kZXIobW9kdWxlLmRlZmF1bHQpLCByZWFjdFJvb3QpXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn1cclxuXHJcbmNvbnN0IEFwcCA9IHJlbmRlcihSb3V0ZXMpO1xyXG5hc3luY0Jvb3RzdHJhcHBlcihBcHApXHJcbiAgICAudGhlbigoKSA9PiBoeWRyYXRlKEFwcCwgcmVhY3RSb290KSk7XHJcblxyXG4vL2RlbGV0ZSB3aW5kb3cuX19BUE9MTE9fU1RBVEVfXztcclxuLy9kZWxldGUgd2luZG93Ll9fQVNZTkNfU1RBVEVfXztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2xpZW50L2NsaWVudC50c3giXSwic291cmNlUm9vdCI6IiJ9