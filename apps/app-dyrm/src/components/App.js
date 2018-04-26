// http://www.thegreatcodeadventure.com/react-redux-tutorial-part-ii-react-router-and-container-components/
//=============================================================================
import React from "react";
import PropTypes from "prop-types"; // ES6
import Header from "./common/Header";
import Body from "./common/Body";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;

//=============================================================================
