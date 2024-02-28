import React, { Component } from 'react'
import ListIcon from '../img/list-icon.svg'
import Calender from '../img/calender-icon.svg'

class Body extends Component{
  constructor(props){
    super(props)
    this.state = {
      todo : "To do list",
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
          <h1>{this.state.todo}</h1>
          <img className = "ListIcon" src = {ListIcon} alt = "list icon" />
        </button>
        <button
          onClick={() => this.action(2)}
          className={this.state.clickedButtonId === 2 ? 'clickedButton-calender' : 'defaultButton-calender'}
        >
          <h1>{this.state.calender}</h1>
          <img className = "Calender" src = {Calender} alt = "calender icon" />
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