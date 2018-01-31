import * as React from 'react'
import { Component } from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo';
import HttpLink from "apollo-link-http";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { AsyncComponentProvider, createAsyncContext } from 'react-async-component'
import asyncBootstrapper from 'react-async-bootstrapper'
import { Provider } from 'react-redux'

import Routes from '../common/routes'
import { store } from '../common/state'

declare let window: {
    __APOLLO_STATE__: any,
    __ASYNC_STATE__: any
}

declare let module: {
    hot: {
        accept: (path: any, fn: () => any) => any
    }
}

const apolloClient = new ApolloClient({
    link: new HttpLink({ uri: "/graphql" }),
    cache: new InMemoryCache().restore(window.__APOLLO_STATE__)
});

const reactRoot: HTMLElement = document.getElementById('react-root');

const render = (Routings: React.ComponentClass) => {
    return (
        <AsyncComponentProvider rehydrateState={window.__ASYNC_STATE__} >
            <Provider store={store}>
                <ApolloProvider client={apolloClient}>
                    <Router>
                        <Routings/>
                    </Router>
                </ApolloProvider>
            </Provider>
        </AsyncComponentProvider>
    )
}

if (module.hot) {
    module.hot.accept('../common/routes', () => {
        import('../common/routes').then((module: any) => {
            hydrate(render(module.default), reactRoot)
        })
    })
}

const App = render(Routes);
asyncBootstrapper(App)
    .then(() => hydrate(App, reactRoot));

//delete window.__APOLLO_STATE__;
//delete window.__ASYNC_STATE__;