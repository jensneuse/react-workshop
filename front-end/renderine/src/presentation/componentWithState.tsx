import * as React from 'react'
import {Component} from 'react'

interface State {
    count: 0
}

class Komponent extends Component<any,State> {
    render(){
        return <div>{this.state.count}</div>
    }
}

export default Komponent;