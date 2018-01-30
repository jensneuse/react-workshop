import * as React from "react";
import Routes from '../common/routes'
import ApolloClient from "apollo-client";
import * as fetch from 'node-fetch'
import { ApolloProvider, renderToStringWithData} from 'react-apollo';
import HttpLink from 'apollo-link-http';
import { StaticRouter } from 'react-router';
import { InMemoryCache } from "apollo-cache-inmemory";
import {renderToString} from 'react-dom/server'

export default function(url: string) : Promise<string> {

    const link = new HttpLink({
        uri: 'http://localhost:8080/graphql'
    });

    const client = new ApolloClient({
        ssrMode: true,
        link,
        cache: new InMemoryCache()
    });

    const context = {};

    const App = (
        <ApolloProvider client={client}>
            <StaticRouter location={url} context={context}>
                <Routes/>
            </StaticRouter>
        </ApolloProvider>
    );

    console.log(context);

    return new Promise((resolve: (result:any )=> void,reject: (error:any) => void ) => {
        
        renderToStringWithData(App)
            .then((reactHtmlContent) => {

                const initialState = JSON.stringify(client.extract()).replace(/</g, '\\u003c');

                resolve(`<!DOCTYPE html>
                    <html>
                    <head>
                        <link rel="apple-touch-icon" sizes="57x57" href="/icon.png" />
                    </head>
                    <body>
                        <div id="react-root">${reactHtmlContent}</div>
                        <script>window.__APOLLO_STATE__=${initialState}</script>
                        <script type="text/javascript" src="/vendor.js"></script>
                        <script type="text/javascript" src="/client.js"></script>
                    </body>
                    </html>`);
                    
        }).catch((reason:any) => {
            reject(reason);
        });

    });
}