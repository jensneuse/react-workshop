import * as React from 'react'
import {Component} from 'react'
import {BrowserRouter,Route} from 'react-router-dom'

import Main from './Main'

class Routes extends Component {
    render(){
        return (
            <BrowserRouter>
                <Route exact path="/" component={Main} />
            </BrowserRouter>
        )
    }
}

export default Routes;
