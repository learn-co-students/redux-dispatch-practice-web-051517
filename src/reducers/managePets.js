export let state;


export function managePets(state = {pets: []}, action){
switch (action.type) {
  case 'ADD_PET':
    return {pets: [...state.pets, action.pet]}

  case 'REMOVE_PET':
    const removalIndex = state.pets.findIndex(pet => pet.id === action.id);
    return {pets: [...state.pets.slice(0, removalIndex), ...state.pets.slice(removalIndex + 1)]}

  default:
    return state;

}
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  const container = document.getElementById('container')
  const petlist = state.pets.map(pet => (`<li>${pet.name}</li>`)).join()
  container.innerHTML = `<ul>${petlist}</ul`


}
