const ui = (state = {}, action) => {
  switch (action.type) {
    case 'TOGGLE_INPUTTING':
      return {
        inputting: !state.inputting,
      };
    default:
      return {
        inputting: false
      }
  }
}

export default ui