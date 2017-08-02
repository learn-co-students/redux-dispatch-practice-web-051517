export let state;


export function managePets(state = {pets: []}, action){
  switch(action.type){
    case 'ADD_PET':
      return {pets: [
              ...state.pets, {name: action.pet.name,
                              species: action.pet.species,
                              id: action.pet.id}
                    ]}
    case 'REMOVE_PET':
      let removePet = state.pets.filter((pet) => pet.id === action.id)
      let removeIndex = state.pets.indexOf(removePet)
      return {pets: [...state.pets.slice(0, removeIndex - 1),
                     ...state.pets.slice(removeIndex, state.pets.length)]}
    default:
      return state
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  let container = document.getElementById("container")
  let pets = state.pets.map((pet) => `<li>${pet.name}</li>`)
  container.innerHTML = (`<ul>${pets.join("")}</li>`)
}
