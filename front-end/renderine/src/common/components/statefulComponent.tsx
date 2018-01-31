import * as React from 'react'
import {Component} from 'react'
import {connect} from 'react-redux'
import {State} from '../state'
import {countersAction} from '../state/reducers/counter'
import {getType} from 'typesafe-actions'

interface StateProps {
    count: number
}

interface ActionProps {
    increment: () => void,
    sub: (amount: number) => void,
}

interface Props extends StateProps,ActionProps {}

class StatefulComponent extends Component<Props> {

    constructor(props: Props){
        super(props);

        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
    }

    increase(){
        console.log('increase');
        this.props.increment();
    }

    decrease(){
        console.log('decrease');
        this.props.sub(1);
    }

    render(){

        console.log('stateful',this.props);

        return (
            <div>
                <h3>Stateful Component</h3>
                <p>Count: {this.props.count}</p>
                <button onClick={this.increase} >increase counter</button>
                <br/>
                <br/>
                <button onClick={this.decrease} >decrease counter</button>
            </div>
        )
    }
}

export default connect<StateProps>((state: State) => ({
    count: state.counter.count
}),{
    increment: countersAction.increment,
    sub: countersAction.sub
})(StatefulComponent)