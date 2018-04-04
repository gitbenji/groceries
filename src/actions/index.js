nextItemId = () => Math.floor(Math.random() * 1000000000)

export const addItem = text => ({
  type: 'ADD_ITEM',
  id: nextItemId(),
  text
})

export const toggleItem = id => ({
  type: 'TOGGLE_ITEM',
  id
})

export const removeItem = id => ({
  type: 'REMOVE_ITEM',
  id
})

export const toggleInputting = _ => ({
  type: 'TOGGLE_INPUTTING',
})