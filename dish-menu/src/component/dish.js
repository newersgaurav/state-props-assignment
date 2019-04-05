import React, { Component } from 'react';
import './dish.css'

class Dish extends Component{
	render(){
		return(
			<div className="dish-card">
					<div className="dish-name">
						{this.props.dishItem.name}
					</div>
					<div className="description">
						<p>DESCRIPTION : {this.props.dishItem.desc}</p>
						<p>PRICE : {this.props.dishItem.price}</p>
						<p>STATUS : {this.props.dishItem.status}</p>
					</div>
			</div>
		)
	}
}

export default Dish;