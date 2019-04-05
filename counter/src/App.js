import React, { Component } from 'react';
import Counter from './component/Counter';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      counters : [
        {
          name : "Counter 1" , count : 0 , index : 0
        },
        {
          name : "Counter 2" , count : 0 , index : 1
        },
        {
          name : "Counter 3" , count : 0 , index : 2
        }
      ]
    }
  }

  increase = (index) => {
    const newCount = this.state.counters.map(ele => {
      if(ele.index === index){
        ele.count = ele.count + 1;
        return ele;
      }
      return ele;
    })

    this.setState(
    {
      counters : newCount
    }
    )   
  }

  

  decrease = (index) => {
    const newCount = this.state.counters.map(ele => {
      if(ele.index === index){
        ele.count = ele.count - 1;
        return ele;
      }
      return ele;
    });

    this.setState({
      counters : newCount
    }) 
  }

  increaseAll = () => {
    const newCount = this.state.counters.map(ele => {
        ele.count = ele.count + 1;
        return ele;
    });

    this.setState({
      counters : newCount
    })  
  }

  decreaseAll = () => {
    const newCount = this.state.counters.map(ele => {
        ele.count = ele.count - 1;
        return ele;
    });

    this.setState({
      counters : newCount
    })   
  }

  render() {
    return (
      <div className="App">
        <div className="counters">
          <Counter ele={this.state.counters[0]} increase={this.increase} decrease={this.decrease}/>
          <Counter ele={this.state.counters[1]} increase={this.increase} decrease={this.decrease}/>
          <Counter ele={this.state.counters[2]} increase={this.increase} decrease={this.decrease}/>
        </div>
        
        <div>
          <button className="button button-i" onClick={this.increaseAll}>Increase All</button>
          <button className="button button-d" onClick={this.decreaseAll}>Decrease All</button>
        </div>
      </div>
    );
  }
}

export default App;
