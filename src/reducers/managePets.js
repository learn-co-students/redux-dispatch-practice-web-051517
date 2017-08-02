export let state;


export function managePets(state = {pets: []}, action){
  switch (action.type) {
  case 'ADD_PET':
    return {pets:[...state.pets, action.pet]}
  case "REMOVE_PET":
    const removePetId = action.id
    const petArray = state.pets.filter(pet => pet.id !== removePetId)
    return {pets:petArray}
  default:
    return state

  }
}

export function dispatch(action){
  console.log( managePets(state, action), "log")
    state = managePets(state, action)
    render()

}

export function render(){
  let container = document.getElementById('container')
  container.innerHTML = (`<ul>${state.pets.map(pet => `<li>${pet.name}</li>`).join("")}</ul>`)

}
