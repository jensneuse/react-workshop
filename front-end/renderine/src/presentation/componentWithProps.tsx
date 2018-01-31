import * as React from 'react'
import {Component} from 'react'

interface Props {
    count: number
}

class Komponent extends Component<Props,any> {
    render(){
        return <div>{this.props.count}</div>
    }
}

const AnotherComp = () => (
    <div>
        <Komponent count={1337} />
    </div>
);