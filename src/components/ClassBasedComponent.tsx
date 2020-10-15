import React, { Component } from 'react';

interface IProps {
  color: string;
}

class ClassBasedComponent extends Component<IProps> {
  state = { hello: "world" };

  render() {
    return (
      <>
        <ul>
          <li>state: {this.state.hello}</li>
          <li>color: {this.props.color}</li>
        </ul>
      </>
    );
  }
}

export default ClassBasedComponent;
