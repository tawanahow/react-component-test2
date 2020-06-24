import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  //https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
  window.navigator.geolocation.getCurrentPosition(
    //success call back function
    //err call back function if postiion is not located
    (position) => console.log(position),
    (err) => console.log(err)
  );

  return <div>Hello</div>;
};

ReactDOM.render(<App />, document.querySelector('#root'));
