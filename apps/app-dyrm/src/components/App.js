// http://www.thegreatcodeadventure.com/react-redux-tutorial-part-ii-react-router-and-container-components/
//=============================================================================
import React from "react";
import PropTypes from "prop-types"; // ES6
import Header from "./common/Header";

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
      </div>
    );
  }
}

export default App;

//=============================================================================
