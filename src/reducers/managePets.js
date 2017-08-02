export let state

export function managePets(state = {pets: []}, action){
  switch (action.type) {

    case "ADD_PET":
      return { pets: [...state.pets, action.pet] }

    case "REMOVE_PET":
      const badPetIndex = state.pets.findIndex((pet) => pet.id === action.id)
      state = {
        pets: [
          ...state.pets.slice(0, badPetIndex),
          ...state.pets.slice(badPetIndex + 1)
        ]}
      return state

    default:
      return state
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  let list = state.pets.map(pet => {
      return `<li>${pet.name}</li>`
    }).join(' ')
  document.getElementById('container').innerHTML = `<ul>${list}</ul>`
}
