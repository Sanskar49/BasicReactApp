import React from 'react';
import './ComponentOne.css'

class ComponentOne extends React.Component {
      constructor(props) {
          super(props);
          this.state = {
              value: 0
          }
          this.inc = this.inc.bind(this);
          this.dec = this.dec.bind(this);
      }
      

      inc() {
          this.setState({value: this.state.value+1});
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
       
        
        return (
            
            <div className="demo">
                <p className="demo">{this.state.value}</p>
                <br />
                <button onClick = {this.inc}>Increament</button>
                <button onClick = {this.dec}>Decreament</button>
                

            </div>
        );  
    }
}
export default ComponentOne;