Store
The store holds the whole state our application. It can dispatch actions and
it receives actions that are dispatched to it. However, the store doesn't want
to handle the dispatched actions and actually enact changes to state.
For that, we use reducers.
