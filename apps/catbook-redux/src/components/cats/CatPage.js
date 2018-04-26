// http://www.thegreatcodeadventure.com/react-redux-tutorial-part-iv-the-index-feature/
//=============================================================================
import React from "react";
import PropTypes from "prop-types"; // ES6
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as catActions from "../../actions/catActions";
import HobbyList from "../hobbies/HobbyList";
import CatForm from "./CatForm";
import { browserHistory } from "react-router";
// import toastr from 'toastr';
//=============================================================================
class CatPage extends React.Component {
  constructor(props, context) {
    console.log("CatPage.js", "constructor()");
    super(props, context);
    this.state = {
      cat: this.props.cat,
      catHobbies: this.props.catHobbies,
      checkBoxHobbies: props.checkBoxHobbies,
      saving: false,
      isEditing: false
    };
    this.saveCat = this.saveCat.bind(this);
    this.updateCatState = this.updateCatState.bind(this);
    this.updateCatHobbies = this.updateCatHobbies.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.deleteCat = this.deleteCat.bind(this);
    this.redirect = this.redirect.bind(this);
  }
  //=============================================================================
  /*The componentWillReceiveProps function will be automatically invoked after 
  mapStateToProps with an argument of nextProps. This argument represents 
  the new props that will be passed to our component.  */
  // https://reactjs.org/docs/react-component.html#componentwillreceiveprops
  /*If you need to update the state in response to prop changes (for example, 
    to reset it), you may compare this.props and nextProps and perform state 
    transitions using this.setState() in this method. */
  componentWillReceiveProps(nextProps) {
    console.log("CatPage.js", "CatPage.componentWillReceiveProps()");
    if (this.props.cat.id != nextProps.cat.id) {
      this.setState({
        cat: nextProps.cat
      });
    }
    if (this.props.checkBoxHobbies.length < nextProps.checkBoxHobbies.length) {
      this.setState({
        catHobbies: nextProps.catHobbies,
        checkBoxHobbies: nextProps.checkBoxHobbies
      });
    }

    this.setState({
      saving: false,
      isEditing: false
    });
  }

  toggleEdit() {
    console.log("CatPage.js", "toggleEdit()");
    this.setState({
      isEditing: true
    });
  }

  updateCatHobbies(event) {
    console.log("CatPage.js", "CatPage.updateCatHobbies.event:", event);
    const cat = this.state.cat;
    const hobbyId = event.target.value;
    const hobby = this.state.checkBoxHobbies.filter(
      hobby => hobby.id == hobbyId
    )[0];
    const checked = !hobby.checked;
    hobby["checked"] = !hobby.checked;
    if (checked) {
      cat.hobby_ids.push(hobby.id);
    } else {
      cat.hobby_ids.splice(cat.hobby_ids.indexOf(hobby.id));
    }
    this.setState({
      cat: cat
    });
  }

  updateCatState(event) {
    console.log("CatPage.js", "CatPage.updateCatState.event:", event);
    const field = event.target.name;
    const cat = this.state.cat;
    cat[field] = event.target.value;
    return this.setState({ cat: cat });
  }

  saveCat(event) {
    console.log("CatPage.js", "CatPage.saveCat.event:", event);
    event.preventDefault();
    this.setState({ saving: true });
    this.props.actions.updateCat(this.state.cat);
  }

  deleteCat(event) {
    console.log("CatPage.deleteCat.event:", event);
    this.props.actions.deleteCat(this.state.cat);
  }

  redirect() {
    console.log("CatPage.js", "CatPage.redirect");
    browserHistory.push("/cats");
  }
  render() {
    console.log("CatPage.js", "render()");
    console.log("CatPage.js", "this.state.isEditing", this.state.isEditing);
    if (this.state.isEditing) {
      return (
        <div>
          <h1>edit cat</h1>
          <CatForm
            cat={this.state.cat}
            hobbies={this.state.checkBoxHobbies}
            onSave={this.saveCat}
            onChange={this.updateCatState}
            onHobbyChange={this.updateCatHobbies}
            saving={this.state.saving}
          />
        </div>
      );
    }
    return (
      <div className="col-md-8 col-md-offset-2">
        <h1>{this.state.cat.name}</h1>
        <p>breed: {this.state.cat.breed}</p>
        <p>weight: {this.state.cat.weight}</p>
        <p>temperament: {this.state.cat.temperament}</p>
        <HobbyList hobbies={this.state.catHobbies} />
        <button onClick={this.toggleEdit} className="btn btn-default  ">
          edit
        </button>
        <button onClick={this.deleteCat} className="btn btn-default  ">
          delete
        </button>
      </div>
    );
  }
}

//=============================================================================
/*We want to ensure that the cats property of our component is in fact in array. 
We should also require that our component receive this property, otherwise it 
will have nothing to render. */
CatPage.propTypes = {
  cat: PropTypes.object.isRequired,
  catHobbies: PropTypes.array.isRequired,
  checkBoxHobbies: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};
//=============================================================================

function getCatById(cats, id) {
  console.log("CatPage.js", "getCatById()");
  let cat = cats.find(cat => cat.id == id);
  return Object.assign({}, cat);
}

function hobbiesForCheckBoxes(hobbies, cat = null) {
  return hobbies.map(hobby => {
    if (
      cat &&
      cat.hobby_ids.filter(hobbyId => hobbyId == hobby.id).length > 0
    ) {
      hobby["checked"] = true;
    } else {
      hobby["checked"] = false;
    }
    return hobby;
  });
}

function collectCatHobbies(hobbies, cat) {
  let selected = hobbies.map(hobby => {
    if (cat.hobby_ids.filter(hobbyId => hobbyId == hobby.id).length > 0) {
      return hobby;
    }
  });
  return selected.filter(el => el != undefined);
}
//=============================================================================
/*The mapStateToProps function has a very important job: receive application 
state from the store whenever state has changed and make data from that data 
available to the component as props. */
/*If your mapStateToProps function is declared as taking two parameters, it will 
be called with the store state as the first parameter and the props passed to the 
connected component as the second parameter, and will also be re-invoked whenever 
the connected component receives new props as determined by shallow equality comparisons. 
(The second parameter is normally referred to as ownProps by convention.) */
function mapStateToProps(state, ownProps) {
  console.log("CatPage.js", "CatPage.mapStateToProps");
  const stateHobbies = Object.assign([], state.hobbies);
  let checkBoxHobbies = [];
  let catHobbies = [];
  let cat = {
    name: "",
    breed: "",
    weight: "",
    temperament: "",
    hobby_ids: []
  };
  const catId = ownProps.params.id;
  console.log("CatPage.js", "CatPage.mapStateToProps.catId", catId);
  if (catId && state.cats.length > 0 && state.hobbies.length > 0) {
    cat = getCatById(state.cats, ownProps.params.id);
    if (cat.id && cat.hobby_ids.length > 0) {
      checkBoxHobbies = hobbiesForCheckBoxes(stateHobbies, cat);
      catHobbies = collectCatHobbies(stateHobbies, cat);
    } else {
      checkBoxHobbies = hobbiesForCheckBoxes(stateHobbies);
    }
  }
  return {
    cat: cat,
    checkBoxHobbies: checkBoxHobbies,
    catHobbies: catHobbies
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(catActions, dispatch)
  };
}
//=============================================================================
/*The connect function is provided by Redux. It subscribes our container 
component to the store, so that it will be alerted when state changes. */
// https://github.com/reactjs/react-redux/blob/master/docs/api.md
// connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
// any time the store is updated, mapStateToProps will be called
export default connect(mapStateToProps, mapDispatchToProps)(CatPage);

//=============================================================================
// connect:
/* will invoke mapDispatchToProps, with an argument of the store's dispatch function
 it has access to the store, b/c you passed store in via the provider
 bindActionCreators will take your collection of action creator functions
 iterate over it, wrap each AC function in store.dispatch(AC function)
 make them available to your component as this.props.actions = {name of an action: 
  store.dispatch(ac function)} */
//=============================================================================
