webpackJsonp([1],{200:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=l(0),a=l(69),n=l(36),o=a.default`
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
`;t.default=n.graphql(o)(class extends r.Component{render(){return this.props.data.loading?r.createElement("div",null,"Loading..."):this.props.data.error?r.createElement("div",null,"Error: ",this.props.data.error.message):r.createElement("div",null,r.createElement("h2",null,"Authors"),r.createElement("ul",null,this.props.data.allAuthors.nodes.map(e=>r.createElement("li",{key:e.nodeId},r.createElement("div",null,"Name: ",e.name),r.createElement("div",null,"NumberOfArticles: ",e.articlesByAuthorId.totalCount)))))}})}});