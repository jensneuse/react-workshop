import * as React from 'react'
import {Component} from 'react'
import {RouteComponentProps} from 'react-router-dom'

interface Props  {

}

class ComponentWithId extends Component<RouteComponentProps<Props>> {
    render(){

        console.log('withProps',this.props);

        return <div>Hello</div>
    }
}

export default ComponentWithId;
