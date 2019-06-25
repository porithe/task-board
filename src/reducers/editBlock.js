const editState = {
  show: false,
}

export default function editBlock(state = editState, action) {
  switch(action.type) {
    case 'SHOW': 
      return {
        show: true,
      }
    case 'HIDE':
      return {
        show: false,
      }
    default:
      return state;  
  }
}