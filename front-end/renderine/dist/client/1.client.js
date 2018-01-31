webpackJsonp([1],{

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const graphql_tag_1 = __webpack_require__(74);
const react_apollo_1 = __webpack_require__(38);
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


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Users\\Jens.Neuse\\repos\\react-workshop\\front-end\\renderine\\src\\common\\components\\allAuthors.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Jens.Neuse\\repos\\react-workshop\\front-end\\renderine\\src\\common\\components\\allAuthors.tsx"); } } })();

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2NvbXBvbmVudHMvYWxsQXV0aG9ycy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxxQ0FBOEI7QUFDOUIsOENBQThCO0FBQzlCLCtDQUErQztBQUcvQyxNQUFNLEtBQUssR0FBRyxxQkFBRzs7Ozs7Ozs7Ozs7Ozs7Q0FjaEIsQ0FBQztBQU1GLGdCQUFpQixTQUFRLEtBQUssQ0FBQyxTQUFnQjtJQUMzQyxNQUFNO1FBRUYsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUM7WUFDekIsTUFBTSxDQUFDLDhDQUFxQjtRQUNoQyxDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFDO1lBQzlCLE1BQU0sQ0FBQzs7Z0JBQWEsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBTztRQUM1RCxDQUFDO1FBRUQsTUFBTSxDQUFDLENBQ0g7WUFDSSwwQ0FBZ0I7WUFDaEIsZ0NBRUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUMzQyw0QkFBSSxHQUFHLEVBQUUsTUFBTSxDQUFDLE1BQU07Z0JBQ2xCOztvQkFBWSxNQUFNLENBQUMsSUFBSSxDQUFPO2dCQUM5Qjs7b0JBQXdCLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQU8sQ0FDbEUsQ0FDUixDQUFDLENBRUQsQ0FDSCxDQUNUO0lBQ0wsQ0FBQztDQUNKO0FBRUQsa0JBQWUsc0JBQU8sQ0FBOEIsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMiLCJmaWxlIjoiMS5jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCB7Z3JhcGhxbCxRdWVyeVByb3BzfSBmcm9tICdyZWFjdC1hcG9sbG8nXHJcbmltcG9ydCB7Z2V0QWxsQXV0aG9yc1F1ZXJ5fSBmcm9tICcuLi8uLi8uLi9ncmFwaHFsLXR5cGVzJztcclxuXHJcbmNvbnN0IHF1ZXJ5ID0gZ3FsYFxyXG4gICAgcXVlcnkgZ2V0QWxsQXV0aG9ycyB7XHJcbiAgICAgICAgYWxsQXV0aG9ycyB7XHJcbiAgICAgICAgICAgIHRvdGFsQ291bnRcclxuICAgICAgICAgICAgbm9kZXMge1xyXG4gICAgICAgICAgICAgICAgbm9kZUlkXHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgYXJ0aWNsZXNCeUF1dGhvcklkIHtcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbENvdW50XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbmA7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgZGF0YTogUXVlcnlQcm9wcyAmIGdldEFsbEF1dGhvcnNRdWVyeVxyXG59XHJcblxyXG5jbGFzcyBBbGxBdXRob3JzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPiB7XHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmRhdGEubG9hZGluZyl7XHJcbiAgICAgICAgICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuZGF0YS5lcnJvcil7XHJcbiAgICAgICAgICAgIHJldHVybiA8ZGl2PkVycm9yOiB7dGhpcy5wcm9wcy5kYXRhLmVycm9yLm1lc3NhZ2V9PC9kaXY+XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgyPkF1dGhvcnM8L2gyPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGF0YS5hbGxBdXRob3JzLm5vZGVzLm1hcChhdXRob3IgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXthdXRob3Iubm9kZUlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+TmFtZToge2F1dGhvci5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5OdW1iZXJPZkFydGljbGVzOiB7YXV0aG9yLmFydGljbGVzQnlBdXRob3JJZC50b3RhbENvdW50fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdyYXBocWw8Z2V0QWxsQXV0aG9yc1F1ZXJ5LFByb3BzLHt9PihxdWVyeSkoQWxsQXV0aG9ycyk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbW1vbi9jb21wb25lbnRzL2FsbEF1dGhvcnMudHN4Il0sInNvdXJjZVJvb3QiOiIifQ==