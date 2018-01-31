import * as React from 'react'
import {Component} from 'react'
import {RouteComponentProps} from 'react-router-dom'

interface Props {

}

class Main extends Component<RouteComponentProps<Props>> {
    render(){

        console.log(this.props);

        return (
            <h1>Main</h1>
        )
    }
}

export default Main;