const inProgState = {
  items: [],
}

export default function inprog(state = inProgState, action) {
  switch(action.type) {
    case 'ADD_INPROG': 
      return {
        items: [...state.items, action.item] 
      };
    case 'DEL_INPROG':
        return {
          items: [...state.items.filter(item => item.id !== action.id)],
        };  
    default:
      return state;  
  }
}