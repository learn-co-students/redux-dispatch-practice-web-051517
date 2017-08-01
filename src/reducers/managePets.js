export let state;


export function managePets(state = {pets: []}, action){
  switch (action.type) {
    case 'ADD_PET':
      return {
        pets: [
        ...state.pets, action.pet
        ]
      }
      break;
    case 'REMOVE_PET':
      const removeIndex = state.pets.findIndex(pet => pet.id === action.id)
        return {
          pets: [
          ...state.pets.slice(0, removeIndex),
          ...state.pets.slice(removeIndex + 1)
        ]
      }
      break;
    default:
      return state

  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  let container = document.getElementById('container')
  let petsHTML = state.pets.map(pet => `<li>${pet.name}</li>`).join(' ')
  container.innerHTML = `<ul>${petsHTML}</ul>`
}
