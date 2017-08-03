export let state;


export function managePets(state = {pets: []}, action){
  switch (action.type) {
    case 'ADD_PET':
      return { pets: [...state.pets, action.pet] }

    case 'REMOVE_PET':
      const petToRemoveId = action.id
      const newPetArray = state.pets.filter(pet => pet.id !== petToRemoveId )
      return {pets: newPetArray}

    default:
      return state
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  const container = document.getElementById('container')
  const petList = state.pets.map(pet => (`<li>${pet.name}</li>`)).join()
  container.innerHTML = `<ul>${petList}</ul>`
}
