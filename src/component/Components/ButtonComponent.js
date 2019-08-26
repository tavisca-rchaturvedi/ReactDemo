import React, { Component } from "react";

class MyButtonComponent extends Component{
    

    buttonClicked(id){
        console.log(id + " Button Clicked!");
    }
    makeButton(){
        return <button onClick={this.buttonClicked} >ABC Button</button>;
    }
}