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

class AnotherStatefulComponent extends Component<Props> {

    constructor(props: Props){
        super(props);

        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
    }

    increase(){
        this.props.increment();
    }

    decrease(){
        this.props.sub(1);
    }

    render(){

        return (
            <div>
                <h3>Another Stateful Component</h3>
                <br/>
                <br/>
                <p>Count: {this.props.count}</p>
                <button onClick={this.decrease} >decrease counter</button>
                <br/>
                <br/>
                <button onClick={this.increase} >increase counter</button>
            </div>
        )
    }
}

export default connect<StateProps>((state: State) => ({
    count: state.counter.count
}),{
    increment: countersAction.increment,
    sub: countersAction.sub
})(AnotherStatefulComponent)