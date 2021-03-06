import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';

class App extends React.Component {
  // constructor(props) {
  //   super(props);

  //   //initialize state to null; we don't know that lat yet
  //   this.state = { lat: null, errorMessage: '' };
  // }

  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    //https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
    window.navigator.geolocation.getCurrentPosition(
      //success call back function
      //err call back function if postiion is not located
      //setState is called anytime state is to be update
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }
  showContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Loader text="Please accept location request" f />;
  }

  //reminder render it to return JSX ONLY
  render() {
    return <div>{this.showContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
