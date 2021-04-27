import React from 'react';
import './ComponentOne.css'
//rcc for class component(Shortcut)
//rsc for constructor

class Counter1 extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
            value : 10

             
        }
        this.inc = this.inc.bind(this);
        this.dec = this.dec.bind(this);
    }
    inc() {
        this.setState({value:this.state.value +=1});
         }
         dec() {
            if(this.state.value<=0) {
                return;
            }
            else {
            this.setState({value: this.state.value -=1});
            }
            
          }
    
    render() {
        return(
            <div>
                <p className="bemo">{this.state.value}</p>
                <br />
                <button onClick = {this.inc}>Increament</button>
                <button onClick = {this.dec}>Decreament</button>
            </div>

        );
    }
}
export default Counter1;