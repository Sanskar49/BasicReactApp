import React from 'react';
import './ComponentOne.css'
import ComponentTwo from './ComponentTwo'
import MainComponent from './MainComponent'

class ComponentOne extends React.Component {

    //states are basically used to yk decalare some variables you might wanna use inside your that very component.
    //Here, value is the state varibale we used inside ComponentOne component.

    //However, if you want to render another component inside an exisiting component, you have to use props like we have used here
    //for componentTwo.
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
            
            <div>
                <p className="demo">{this.state.value}</p>
                <br />
                <button onClick = {this.inc}>Increament</button>
                <button onClick = {this.dec}>Decreament</button>
                <ComponentTwo name="abc" id='101'> Something fissy? </ComponentTwo>
                <MainComponent />
                

            </div>
            
        );  
    }
}
export default ComponentOne;