import * as React from 'react'
import {Component} from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'

import HelloComponent from './Hello'
import FunComponent from './Fun'
import ComponentWithId from './ComponentWithId'

class RootRoutes extends Component {
    render() {
        return <div>
            <BrowserRouter>
                <div>
                    <Link to="/">Go to Main</Link>
                    <br/><br/>
                    <Link to="/fun">Go to fun</Link>
                    <br/><br/>
                    <Link to="/withState">Go to withState</Link>
                    <br/><br/>
                    <Route exact path="/" component={HelloComponent}/>
                    <Route exact path="/fun" component={FunComponent}/>
                    <Route exact path="/withState" component={ComponentWithId}/>
                    <Route exact path="/withState/:id" component={ComponentWithId}/>
                </div>
            </BrowserRouter>
        </div>
    }
}

export default RootRoutes;