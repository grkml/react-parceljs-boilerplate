import React from "react";
import ParcelLogo from './img/parcel-logo.svg';

class App extends React.Component {
  state = {
    name: ""
  };

  handleChange = (event) => this.setState({ value: event.target.value });
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      name: this.state.value
    });
  };

  render() {
    return (
      <React.Fragment>
        <img src={ParcelLogo} />
        
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter Your Name:
          </label>
          <br />
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
        
        <div className="container">
          <h1>Hello {this.state.name}!</h1>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
