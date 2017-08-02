import React from 'react'
export let state;

export function managePets(state = {pets: []}, action){
  switch(action.type){
    case "ADD_PET" :{
      const newPet = {name: action.pet.name, species: action.pet.species, id: action.pet.id}
       return {pets: [...state.pets, newPet]};
    }
    case 'REMOVE_PET' :
      let indexToDelete = null
      state.pets.map( (pet, index ) => {
        if (pet.id === action.id) {
          indexToDelete = index
        }
      })
      return {
        pets:
          [
            ...state.pets.slice(0, indexToDelete),
            ...state.pets.slice(indexToDelete + 1)
          ]
      }
    default:
      return state
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render() {
  const petsList = state.pets.map(pet => `<li>${pet.name}</li>` )
  document.getElementById('container').innerHTML = `<ul>${petsList}</ul>`;
}

