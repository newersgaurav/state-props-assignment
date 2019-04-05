import React, { Component } from 'react';
import dishes from './dishesSample';
import Dishes from './dishes';

class MenuContainer extends Component{

	constructor(){
		super();
		this.state = {
			dishes : dishes
		}
	}

	handleAddDish=(e,dish)=>{
    e.preventDefault();
    console.log(dish);
   
    
     let newDishes=this.state.dishes.slice();
     newDishes.push(dish);
     this.setState({
         dishes:newDishes,
     })

 	}

	render(){
		return(
			<div>
				
				<Dishes dishes = {this.state.dishes} handleAddDish= {this.handleAddDish}/> 
			</div>
		)
	}
}

export default MenuContainer;