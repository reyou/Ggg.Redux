import * as types from "./actionTypes";
class Actions {
  loadHomeItems() {
    return {
      type: types.LOAD_HOME_ITEMS
    };
  }
}

module.exports = new Actions();
