import * as React from 'react'
import {Component} from 'react'
import {hydrate} from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import { ApolloProvider } from 'react-apollo';
import HttpLink from "apollo-link-http";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";

declare let window: {
    __APOLLO_STATE__: any
}

const apolloClient = new ApolloClient({
  link: new HttpLink({ uri: "/graphql" }),
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__)
});

import Routes from '../common/routes'

const reactRoot: HTMLElement = document.getElementById('react-root');

declare let module: {
    hot: {
        accept: (path: any,fn: ()=>any) => any
    }
}

const render = (Routings: React.ComponentClass) => {
    return (
        <ApolloProvider client={apolloClient}>
        <Router>
            <Routings/>
        </Router>
        </ApolloProvider>
    )
}

if (module.hot) {
    module.hot.accept('../common/routes',() => {
        import('../common/routes').then((module:any) => {
            hydrate(render(module.default),reactRoot)
        })
    })
}

hydrate(render(Routes),reactRoot)