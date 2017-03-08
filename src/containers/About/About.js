import React, {Component} from 'react';

export default class About extends Component {

  state = {
    showKitten: false
  }

  handleToggleKitten = () => this.setState({showKitten: !this.state.showKitten});

  render() {
    return (
      <div className="container">
        <h1>About Us</h1>
      </div>
    );
  }
}
