import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    //https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
    window.navigator.geolocation.getCurrentPosition(
      //success call back function
      //err call back function if postiion is not located
      (position) => console.log(position),
      (err) => console.log(err)
    );

    return <div>Latitude: </div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
