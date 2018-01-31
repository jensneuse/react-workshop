import * as express from 'express'

const IS_PRODUCTION: boolean = process.env.NODE_ENV === 'production';
const PORT: number = 8081;
const HOST: string = 'localhost';

const server = express();

if (!IS_PRODUCTION){

    const webpackDevMiddleware = require("webpack-dev-middleware");
    const webpack = require("webpack");
    const webpackConfig = require("../../webpack.client.config");
    const compiler = webpack(webpackConfig);
    
    server.use(webpackDevMiddleware(compiler, {
        publicPath: "/",
        noInfo: true
    }));

    server.use(require("webpack-hot-middleware")(compiler));
} else {
    server.use('/',express.static('dist/client',{}));
}

server.get('*', (req: express.Request, res: express.Response) => {

    res.status(200);
    res.end(`<!DOCTYPE html>
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

server.listen(PORT,HOST,() => {
    console.log(`listening on: ${HOST}:${PORT}`);
});