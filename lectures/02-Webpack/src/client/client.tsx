import * as React from 'react'
import {hydrate} from 'react-dom'

import Hello from './components/Hello'

const reactRoot = document.getElementById('react-root');

const render = (Routings: React.ComponentClass) => {
    return (
        <Routings/>
    )
};

hydrate(render(Hello),reactRoot);

declare let module: {
    hot: {
        accept: (path: any, fn: () => any) => any
    }
}

module.hot.accept('./components/Hello', () => {
    import('./components/Hello').then((module: any) => {
        hydrate(render(module.default), reactRoot);
    })
})