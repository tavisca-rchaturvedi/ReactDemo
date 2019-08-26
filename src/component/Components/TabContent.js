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
                return (<div style={style}>
                    <input id="firstName" value={name.FirstName}></input>
                    <input id="lastName" value={name.LastName}></input>
                    <button onClick={() => 
                        this.props.updateState(
                            document.getElementById().value,
                            document.getElementById().value,
                            this.props.selectedIndex
                            )}>Update</button>
                </div>)
            }
        })
    }

    render(){
        if(this.props.selectedIndex != null){
            let style = {
                display: "block"
            }
            return <div style={style}>{this.showInputs(this.props.selectedIndex)}</div>
        }
        return <div></div>
    }
}

export default TabContentComponent;