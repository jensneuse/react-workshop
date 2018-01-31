import * as React from 'react'
import {Component} from 'react'
import {Route} from 'react-router-dom'

import Header from './components/header'
import Main from './components/home'
import AllAuthors from './components/asyncAuthors'
import AllArticles from './components/allArticles'
import FatComponent from './components/asyncFatComponent'
import StatefulComponent from './components/statefulComponent'
import AnotherStatefulComponent from './components/anotherStatefulComponent'

class Routes extends Component {
    render(){
        return <div>
                <Header/>
                <Route exact path="/" component={Main} />
                <Route exact path="/authors" component={AllAuthors}/>
                <Route exact path="/articles" component={AllArticles}/>
                <Route exact path="/fatComponent" component={FatComponent}/>
                <Route exact path="/stateful" component={StatefulComponent}/>
                <Route exact path="/anotherStateful" component={AnotherStatefulComponent}/>
            </div>
    }
}

export default Routes;