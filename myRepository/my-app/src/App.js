import React, { Component } from 'react';
import ChildComponent from './ChildComponent'; // Import Child Component

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello, World!',  // Initial state
    };
  }

  // Function to update the message
  updateMessage = (event) => {
    this.setState({ message: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>App Component</h1>
        <ChildComponent message={this.state.message} />
        
        <input
          type="text"
          value={this.state.message}
          onChange={this.updateMessage}
        />
      </div>
    );
  }
}

export default App;