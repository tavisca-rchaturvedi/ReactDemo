import React, { Component } from "react";
import s from "./app.component.css";
class MyComponent extends Component {

  data = [{
    "FirstName" : "Rishabh",
    "LastName" : "Chaturvedi"
  }, {
    "FirstName" : "Vishal",
    "LastName" : "Sharma"
  }]


  componentDidMount(){
    
  }

  buttonClicked(){
    console.log("Button Clicked!");
  }

  makeButton(){
    return <button onClick={this.buttonClicked} >ABC Button</button>
  }

  render() {
    return this.makeButton();
  }
}
export default MyComponent;
