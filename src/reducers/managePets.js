export let state;


export function managePets(state={pets:[]}, action){
  switch(action.type){
    case 'ADD_PET':
    state = {
      pets:[
        ...state.pets, action.pet
      ]
    }
    break;

    case 'REMOVE_PET':
    const pets = state.pets.filter((pet)=>pet.id !== action.id)
    state = {
      pets
    }
    break;
  }
  return state;
}

export function dispatch(action){
  state = managePets(state, action);
  render();
}

export function render(){
  console.log(state)
  let container = document.getElementById('container')
  const pets = state.pets.map((pet)=>{
    return `<li>${pet.name}</li>`
  }).join('')
  container.innerHTML = `<ul>${pets}</ul>`
}
