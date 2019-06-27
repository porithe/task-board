const doneState = {
  items: [],
}

export default function done(state = doneState, action) {
  switch(action.type) {
    case 'ADD_DONE': 
      return {
        items: [...state.items, action.item] 
      };
    case 'DEL_DONE':
        return {
          items: [...state.items.filter(item => item.id !== action.id)],
        };  
    default:
      return state;  
  }
}