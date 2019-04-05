import React, { Component } from 'react';
import Dish from './dish';
import './dishes.css'

class Dishes extends Component{

	constructor(){
		super();
		this.state = {
			dish : {}
		}
	}

	handleOnChange=(event)=>{
        
        let newDish={};
        newDish[event.target.name]=event.target.value 
    
     this.setState({
         dish:{
             ...this.state.dish,
             ...newDish
         }
     })
    }

	render(){
		return(
			<div className="dishList">

		{this.props.dishes.map( ele => {
			return(
				<div>
					<Dish dishItem = {ele}/>
				</div>
			)
		  })
		}

			<div className="add_dish">
				<h2>ADD DISH</h2>
	             <form className="add_dish_form" onSubmit={(event)=>this.props.handleAddDish(event,this.state.dish)}> 
		              <label>Name</label>
		              <input onChange={this.handleOnChange} type="text" value={this.state.dish.name}  name="name"/>
		              <label>Description</label>
		              <input onChange={this.handleOnChange} type="text" value={this.state.dish.desc}  name="desc"/>
		              <label>Price</label>
		              <input  onChange={this.handleOnChange} type="text" value={this.state.dish.price} name="price"/> 
		              <label>Status</label>
		              <input onChange={this.handleOnChange} type="text"  name="status"/>
		              <input  type="submit"/>
	              </form>
	        </div>

		</div>
		)
		
	}
}

export default Dishes;