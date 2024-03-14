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
      <div>
  
      </div>

      
    );
  }
}
    

export default Body