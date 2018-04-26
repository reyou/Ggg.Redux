Reducers
After we dispatched our first action and implemented our first action
creator, someone must be aware of that action type to access the global
state. These functions are called reducers, because they take an action
with its type and payload and reduce it to a new state
(previousState, action) => newState. Important: Rather than modifying the
previousState, we return a new object newState - the state is immutable.

The state in Redux must be treated as immutable state. You will never modify
the previous state and you will always return a new state object. You want
to keep your data structure immutable to avoid any side effects in your
application.
