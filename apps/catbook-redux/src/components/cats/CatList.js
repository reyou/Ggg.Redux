// http://www.thegreatcodeadventure.com/react-redux-tutorial-part-iv-the-index-feature/
//=============================================================================
import React from "react";
import PropTypes from "prop-types"; // ES6
import CatListItem from "./CatListItem";
import { Link } from "react-router";
//=============================================================================
/*For small, stateless (i.e. presentation) components, function definitions 
provide a clean, eloquent interface. */
/*Functional components take in an argument of props, which are passed in when 
the component is called. Functional components don't have an explicit render method, 
instead they render whatever is returned.*/
const CatList = ({ cats }) => {
  return (
    <ul className="list-group">
      {cats.map(cat => (
        <li className="list-group-item" key={cat.id}>
          <Link to={"/cats/" + cat.id}>{cat.name}</Link>
        </li>
      ))}
    </ul>
  );
};
//=============================================================================
// https://reactjs.org/docs/typechecking-with-proptypes.html
CatList.propTypes = {
  cats: PropTypes.array.isRequired
};
//=============================================================================
export default CatList;
//=============================================================================
