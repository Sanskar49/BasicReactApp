import React from 'react'
import './ComponentOne.css'

class Counter2 extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            value : 15

             
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
                <p className="cemo">{this.state.value}</p>
                <br />
                <button onClick = {this.inc}>Increament</button>
                <button onClick = {this.dec}>Decreament</button>
            </div>

        );
    }
}
export default Counter2;