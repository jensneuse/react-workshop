import * as React from 'react'
import {Component} from 'react'

class Hello2 extends Component {

    shouldComponentUpdate(){
        return true;
    }

    render(){
        return <h1>HI</h1>
    }
}

export default Hello2;