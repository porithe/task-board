export default function inprog(state = [], action) {
  switch(action.type) {
    case 'ADD_INPROG': 
      return state.concat([action.task]);
    default:
      return state;  
  }
}