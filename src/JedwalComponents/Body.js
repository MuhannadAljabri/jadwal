import React, { Component } from 'react'

class Body extends Component{
  constructor(props){
    super(props)
    this.state = {
      todo : "To Do List",
      calender : "Calender",
      clickedButtonId: null,
      buttonId : null
    }
  }

  action(buttonId){
    this.setState({
      clickedButtonId: buttonId
    });
  }
  
  render(){
    return(
      <div className='toDoList'>
        <button
          onClick={() => this.action(1)}
          className={this.state.clickedButtonId === 1 ? 'clickedButton' : 'defaultButton'}
        >
          <h2>{this.state.todo}</h2>
        </button>

        <button
          onClick={() => this.action(2)}
          className={this.state.clickedButtonId === 2 ? 'clickedButton-calender' : 'defaultButton-calender'}
        >
          <h2>{this.state.calender}</h2>
        </button>

        <div className = {this.state.clickedButtonId === 1 ? "show-content" : "content"}>
        <h1>To Do List</h1>
        </div>
        <div className = {this.state.clickedButtonId === 2 ? "show-content" : "content"}>
        <h1>Calender</h1>
        </div>
      </div>

      
    );
  }
}
    

export default Body