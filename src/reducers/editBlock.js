const editState = {
  show: false,
  itemToEdit: [],
}

export default function editBlock(state = editState, action) {
  switch(action.type) {
    case 'SHOW': 
      return {
        show: true,
        itemToEdit: [action.item],
      }
    case 'HIDE':
      return {
        show: false,
        itemToEdit: [],
      }
    default:
      return state;  
  }
}