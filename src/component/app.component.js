import React, { Component } from "react";
import TabListComponent from './Components/TabList.js';
import TabContentComponent from './Components/TabContent.js';
import s from "./app.component.css";
class MyComponent extends Component {

  constructor(props){
    super(props);
    this.state = {
      data : [{
        "FirstName" : "Rishabh",
        "LastName" : "Chaturvedi"
      }, {
        "FirstName" : "Vishal",
        "LastName" : "Sharma"
      },{
        "FirstName" : "Hello",
        "LastName" : "World"
      },{
        "FirstName" : "ABCD",
        "LastName" : "CDEF"
      }],
      index: null
    }
  }


  fetchData(){
    return this.state.data.map((name, index) => {
      return <button id={index} onClick={() => this.buttonClicked(name.FirstName+name.LastName)}>{name.FirstName + " " + name.LastName}</button>
    });
  }

  updateState(firstName, lastName, index){
    console.log(firstName, lastName, index);
    let updatedData = this.state.data;
    updatedData[index] = {"FirstName" : firstName, "LastName": lastName};
    this.setState({
      data: updatedData
    })
//    this.state.data[index].FirstName = firstName;
  //  this.state.data[index].LastName = lastName;
  }

  buttonClicked(index){
    console.log(index);
    this.setState({
      selectedIndex: index
    })
  }

  render() {
    let style = {display: "flex", border: "2px solid red"};
    return (
    <div style={style}>
      <TabListComponent data={this.state.data} clicked={this.buttonClicked.bind(this)}></TabListComponent>
      <TabContentComponent updateState={this.updateState.bind(this)} data={this.state.data} selectedIndex={this.state.selectedIndex}></TabContentComponent>
    </div>
    )
  }

}
export default MyComponent;
