import * as React from 'react'
import {hydrate} from 'react-dom'

import Routes from './components/Routes'

const reactRoot = document.getElementById('react-root');

const render = (Routings: React.ComponentClass) => {
    return (
        <Routings/>
    )
};

hydrate(render(Routes),reactRoot);

declare let module: {
    hot: {
        accept: (path: any, fn: () => any) => any
    }
}

module.hot.accept('./components/Routes', () => {
    import('./components/Routes').then((module: any) => {
        hydrate(render(module.default), reactRoot);
    })
})