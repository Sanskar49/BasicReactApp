import React from 'react'
import Counter1 from './Counter1'
import Counter2 from './Counter2'
import Counter3 from './Counter3'

class MainComponent extends React.Component {
    render() {
        return(
            <div>
            <Counter1 />
            <Counter2 />
            <Counter3 />
                
            </div>

        );
    }
}
export default MainComponent;