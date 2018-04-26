import {
  ADD_TODO,
  TOGGLE_TODO,
  GET_TODO_DATA_RECEIVED,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  COMPLETE_ALL,
  CLEAR_COMPLETED
} from "../constants/ActionTypes";

const initialState = [
  {
    text: "Use Redux",
    completed: false,
    id: 0
  }
];

const todo = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case "TOGGLE_TODO":
      if (state.id !== action.id) {
        return state;
      }

      return Object.assign({}, state, {
        completed: !state.completed
      });
    default:
      return state;
  }
};

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        todo(
          undefined,
          Object.assign(action, {
            id: state.length
          })
        )
      ];
    case TOGGLE_TODO:
      return state.map(t => todo(t, action));
    /*
  Consider all received data as the initial list of
  todo items
  */
    case GET_TODO_DATA_RECEIVED:
      console.log("reducers-todos.js.action.data:");
      console.log(action.data);
      return action.data;
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);

    case EDIT_TODO:
      return state.map(
        todo => (todo.id === action.id ? { ...todo, text: action.text } : todo)
      );

    case COMPLETE_TODO:
      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );

    case COMPLETE_ALL:
      const areAllMarked = state.every(todo => todo.completed);
      return state.map(todo => ({
        ...todo,
        completed: !areAllMarked
      }));

    case CLEAR_COMPLETED:
      return state.filter(todo => todo.completed === false);

    default:
      return state;
  }
}
