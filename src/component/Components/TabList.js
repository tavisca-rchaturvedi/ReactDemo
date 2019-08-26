import React, {Component} from 'react';


class TabListComponent extends Component{

    constructor(props){
        super(props);
    }

    fetchList(){

        let style = {
            display: "block",
            color: "white",
            backgroundColor: "blue",
            fontSize: "larger",
            width: "-webkit-fill-available"
        }

        return this.props.data.map((data, index) => {
            return <button id={index} onClick={() => this.props.clicked(index)} style={style}>{data.FirstName + " " + data.LastName}</button>
        })
    }

    makeList(){
        let style={
            width: "max-content",
            border:"2px solid black",
            height: "-webkit-fill-available",
            padding: "inherit"
        }
        return <ul style={style}>{this.fetchList()}</ul>;
    }


    render(){
        let style = {
            border: "2px solid black"
        }
       return <div id="list">{this.makeList()}</div>; 
    }
}

export default TabListComponent;