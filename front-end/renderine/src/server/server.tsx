import * as express from 'express'
import {postgraphile} from 'postgraphile'
import render from './serverRender'

const IS_PRODUCTION: boolean = process.env.NODE_ENV === 'production';
const PORT: number = parseInt(process.env.PORT) || 8080;
const HOST: string = 'localhost';

const server = express();

server.use(postgraphile('postgres://postgres@localhost:15432/postgres','workshop',{
    graphiql: true,
    graphqlRoute: '/graphql'
}));

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
}

server.get('*', (req: express.Request, res: express.Response) => {

    const context = {};

    render(req.url).then((html: string) => {
        res.status(200);
        res.end(html);
    }).catch((e: Error)=> {
        console.log('Error rendering: ',e);
        res.status(500);
        res.end();
    });
});

server.listen(PORT,HOST,() => {
    console.log(`listening on: ${HOST}:${PORT}`);
});