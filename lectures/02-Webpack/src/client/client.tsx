import * as React from 'react'
import {hydrate} from 'react-dom'

import RootRoutes from './components/RootRoutes'

const reactRoot = document.getElementById('react-root');

const render = (Routings: React.ComponentClass) => {
    return (
        <Routings/>
    )
};

hydrate(render(RootRoutes),reactRoot);

declare let module: {
    hot: {
        accept: (path: any, fn: () => any) => any
    }
}

module.hot.accept('./components/RootRoutes', () => {
    import('./components/RootRoutes').then((module: any) => {
        hydrate(render(module.default), reactRoot);
    })
})