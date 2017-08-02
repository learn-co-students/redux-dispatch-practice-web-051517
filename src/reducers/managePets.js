export let state;


export function managePets(state = { pets: [] }, action) {
  switch (action.type) {
    case 'ADD_PET': return { pets: [...state.pets, action.pet] }
    case 'REMOVE_PET': return { pets: state.pets.filter( pet => {
      return pet.id !== action.id
    })}
    default: return state;
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){

  function buildHTML(arr) {
    let html = "<ul>"

    arr.map( pet => {
      html += "<li>"
      html += pet.name
      html += "</li>"
    })

    html += "</ul>"

    return html
  }
  let container = document.getElementById('container');
  container.innerHTML = buildHTML(state.pets)
}
