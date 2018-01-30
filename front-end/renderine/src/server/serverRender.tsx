import * as React from "react";
//import {renderToString} from "react-dom/server"

import Routes from '../common/routes'

export default function(url: string) : Promise<string> {

    
    const App = (
        <div>
            <Routes/>
        </div>
    );

    //const applicationHTML = renderToString(App);
        
    return new Promise((resolve,reject) => {
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