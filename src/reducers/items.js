const items = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          ownerHas: false
        }
      ]
    case 'TOGGLE_ITEM':
      return state.map(item =>
        (item.id === action.id)
          ? {...item, ownerHas: !item.ownerHas}
          : item
      )
    case 'REMOVE_ITEM':
      return state.filter(item => item.id != action.id)
    default:
      return state
  }
}

export default items