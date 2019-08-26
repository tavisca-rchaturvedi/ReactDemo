import React, {Component} from 'react';

class TabContentComponent extends Component{


    constructor(props){
        super(props);

    }

    showInputs(index){
        return this.props.data.map((name, index) => {
            let style = {
                display: "block"
            } 
            if(index == this.props.selectedIndex){
                let firstName = name.FirstName;
                let lastName = name.LastName;
                return (<div style={style}>
                    <input type="text" id="firstName" defaultValue={firstName}></input>
                    <input type="text" id="lastName" defaultValue={lastName}></input>
                    <button onClick={() => 
                        this.props.updateState(
                            document.getElementById("firstName").value,
                            document.getElementById("lastName").value,
                            this.props.selectedIndex
                            )}>Update</button>
                </div>)
            }
        })
    }

    render(){
        if(this.props.selectedIndex != null){
            let style = {
                display: "block",
                margin: "100px"
            }
            return <div style={style}>{this.showInputs(this.props.selectedIndex)}</div>
        }
        return <div></div>
    }
}

export default TabContentComponent;