import * as React from 'react'
import {Component} from 'react'
import {Route} from 'react-router-dom'

import Header from './components/header'
import Main from './components/home'
import AllAuthors from './components/allAuthors'
import AllArticles from './components/allArticles'

class Routes extends Component {
    render(){
        return <div>
                <Header/>
                <Route exact path="/" component={Main} />
                <Route exact path="/authors" component={AllAuthors}/>
                <Route exact path="/articles" component={AllArticles}/>
            </div>
    }
}

export default Routes;