export default function done(state = [], action) {
  switch(action.type) {
    case 'ADD_DONE': 
      return state.concat([action.task]);
    default:
      return state;  
  }
}