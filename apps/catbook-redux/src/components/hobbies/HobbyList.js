//=============================================================================
// https://github.com/SophieDeBenedetto/catbook-redux/blob/blog-post/src/components/hobbies/HobbyList.js
// http://www.thegreatcodeadventure.com/react-redux-tutorial-part-v-the-show-feature/
//=============================================================================
import React from "react";
import PropTypes from "prop-types"; // ES6
import HobbyListRow from "./HobbyListRow";
//=============================================================================
const HobbyList = ({ hobbies }) => {
  return (
    <div>
      <h3>Hobbies</h3>
      <table className="table">
        <thead>
          <tr>
            <th />
          </tr>
        </thead>
        <tbody>
          {hobbies.map(hobby => <HobbyListRow key={hobby.id} hobby={hobby} />)}
        </tbody>
      </table>
    </div>
  );
};

//=============================================================================
HobbyList.propTypes = {
  hobbies: PropTypes.array.isRequired
};
//=============================================================================
export default HobbyList;
//=============================================================================
