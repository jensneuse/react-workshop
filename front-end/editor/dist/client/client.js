webpackJsonp([0],{240:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=l(0),r=l(0),a=l(24);t.default=class extends r.Component{render(){return n.createElement("div",null,n.createElement("h1",null,"Header"),n.createElement("ul",null,n.createElement("li",null,n.createElement(a.Link,{to:"/"},"Main")),n.createElement("li",null,n.createElement(a.Link,{to:"/authors"},"Authors")),n.createElement("li",null,n.createElement(a.Link,{to:"/articles"},"Articles"))))}}},241:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=l(0),r=l(0);t.default=class extends r.Component{render(){return n.createElement("div",null,n.createElement("p",null,"Main"))}}},242:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=l(0),r=l(0),a=l(77),o=l(31),u=a.default`
    query getAllAuthors {
        allAuthors {
            totalCount
            nodes {
                nodeId
                id
                name
                bornIn
                articlesByAuthorId {
                    totalCount
                }
            }
        }
    }
`;t.default=class extends r.Component{render(){return n.createElement("div",null,n.createElement("p",null,"Authors"),n.createElement(o.Query,{query:u},e=>e.loading?n.createElement("p",null,"Loading..."):e.error?n.createElement("p",null,e.error.message):n.createElement("ol",null,e.data.allAuthors.nodes.map(e=>n.createElement("li",null,n.createElement("h3",null,e.name),n.createElement("h4",null,e.bornIn),n.createElement("p",null,"Total Articles Count: ",e.articlesByAuthorId.totalCount))))))}}},252:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=l(0),r=l(0),a=l(77),o=l(31),u=a.default`
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
            }
          }
        }
      }
`;t.default=class extends r.Component{render(){return n.createElement("div",null,n.createElement(o.Query,{query:u},e=>e.loading?n.createElement("div",null,"Loading..."):e.error?n.createElement("div",null,"Error: ",e.error.message):n.createElement("div",null,n.createElement("p",null,"Articles"),n.createElement("ol",null,e.data.allArticles.nodes.map(e=>n.createElement("li",{key:e.nodeId},n.createElement("h3",null,e.title),e.description&&n.createElement("p",null,e.description)||n.createElement("p",null,"No description available")))))))}}},45:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=l(0),r=l(0),a=l(24),o=l(240),u=l(241),c=l(242),d=l(252);t.default=class extends r.Component{render(){return n.createElement("div",null,n.createElement(o.default,null),n.createElement(a.Route,{exact:!0,path:"/",component:u.default}),n.createElement(a.Route,{exact:!0,path:"/authors",component:c.default}),n.createElement(a.Route,{exact:!0,path:"/articles",component:d.default}))}}},82:function(e,t,l){l(83),e.exports=l(92)},92:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=l(0),r=l(94),a=l(24),o=l(31),u=l(200),c=l(218),d=l(231),s=new c.default({link:new u.default({uri:"/graphql"}),cache:(new d.InMemoryCache).restore(window.__APOLLO_STATE__)}),i=l(45),m=document.getElementById("react-root"),E=e=>n.createElement(o.ApolloProvider,{client:s},n.createElement(a.BrowserRouter,null,n.createElement(e,null)));e.hot.accept(45,()=>{Promise.resolve().then(()=>l(45)).then(e=>{r.hydrate(E(e.default),m)})}),r.hydrate(E(i.default),m)}},[82]);