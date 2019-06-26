const todoState = {
  items: [],
}

export default function todos(state = todoState, action) {
  switch(action.type) {
    case 'ADD_TODO': 
      return {
        items: [...state.items, action.item],
      };
    case 'EDIT_TODO':
      return {
        items: [...state.items.map( item => {
          if (item.id === action.id) {
            item.task = action.newTask;
          }
          return item;
        })],
      };
    case 'DEL_TODO':
      return {
        items: [...state.items.filter(item => item.id !== action.id)],
      }; 
    default:
      return state;  
  }
}