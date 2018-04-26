// https://github.com/SophieDeBenedetto/catbook-redux/blob/blog-post/src/components/hobbies/HobbyListRow.js
//=============================================================================
import React from "react";
import PropTypes from "prop-types"; // ES6
import { Link } from "react-router";

const HobbyListRow = ({ hobby }) => {
  return (
    <tr>
      <td>{hobby.name}</td>
    </tr>
  );
};

HobbyListRow.propTypes = {
  hobby: PropTypes.object.isRequired
};

export default HobbyListRow;

//=============================================================================
