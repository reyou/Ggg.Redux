// https://github.com/SophieDeBenedetto/catbook-redux/blob/blog-post/src/components/common/CheckBox.js
import React from "react";
import PropTypes from "prop-types"; // ES6
class CheckBox extends React.Component {
  render() {
    return (
      <div className="field">
        <div>
          <label>{this.props.item.name}</label>
          <input
            type="checkbox"
            name={this.props.item.name}
            value={this.props.item.id}
            checked={this.props.item.checked}
            onChange={this.props.handleChange}
          />
        </div>
      </div>
    );
  }
}

CheckBox.propTypes = {
  item: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default CheckBox;
