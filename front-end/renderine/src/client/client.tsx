import * as React from 'react'
import {Component} from 'react'
import {hydrate} from 'react-dom'

import Routes from '../common/routes'

const reactRoot: HTMLElement = document.getElementById('react-root');

declare let module: {
    hot: {
        accept: (path: any,fn: ()=>any) => any
    }
}

const render = (Routings: React.ComponentClass) => {
    return (
        <div>
            <Routings/>
        </div>
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