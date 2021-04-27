import React from 'react';

class ComponentTwo extends React.Component {
    render() {
        return (
            <div>
            <h1>Hello {this.props.name}</h1>
            <h2>{this.props.children}</h2>

            </div>
        );
    }
}
export default ComponentTwo;