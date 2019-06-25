const todoState = {
  items: [],
}

export default function todos(state = todoState, action) {
  switch(action.type) {
    case 'ADD_TODO': 
      return {
        items: [...state.items, action.item] 
      };
    default:
      return state;  
  }
}