import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component{
	render(){
		return(
			<div className="counter">
				<p>{this.props.ele.name}</p>
				<span>{this.props.ele.count}</span>
				<div>
					<button className="btn btn-i" onClick={() => this.props.increase(this.props.ele.index)}>+</button>
					<button className="btn btn-d" onClick={() => this.props.decrease(this.props.ele.index)}>-</button>
				</div>
			</div>
		);
	}
}

export default Counter;