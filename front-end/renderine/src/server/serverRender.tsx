import * as React from "react";
import ApolloClient from "apollo-client";
import * as fetch from 'node-fetch'
import { ApolloProvider, renderToStringWithData } from 'react-apollo';
import HttpLink from 'apollo-link-http';
import { StaticRouter } from 'react-router';
import { InMemoryCache } from "apollo-cache-inmemory";
import { renderToString } from 'react-dom/server';
import { AsyncComponentProvider, createAsyncContext } from 'react-async-component';
import asyncBootstrapper from 'react-async-bootstrapper';
import { Provider as ReduxProvider } from 'react-redux'

import Routes from '../common/routes';
import { store } from '../common/state';

export default function (url: string): Promise<string> {

    const link = new HttpLink({
        uri: 'http://localhost:8081/graphql'
    });

    const client = new ApolloClient({
        ssrMode: true,
        link,
        cache: new InMemoryCache()
    });

    const routerContext = {};
    const asyncContext = createAsyncContext();
    const reduxStore = store();

    const App = (
        <AsyncComponentProvider asyncContext={asyncContext} >
            <ReduxProvider store={reduxStore}>
                <ApolloProvider client={client}>
                    <StaticRouter location={url} context={routerContext}>
                        <Routes />
                    </StaticRouter>
                </ApolloProvider>
            </ReduxProvider>
        </AsyncComponentProvider>
    );

    return new Promise((resolve: (result: any) => void, reject: (error: any) => void) => {

        asyncBootstrapper(App).then(() =>
            renderToStringWithData(App)
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

                }).catch((reason: any) => {
                    reject(reason);
                }));

    });
}