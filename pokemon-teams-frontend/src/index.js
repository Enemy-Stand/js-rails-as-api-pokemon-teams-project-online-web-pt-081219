const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`


document.addEventListener("DOMContentLoaded", () => {
  getTrainers()
})

// function getTrainers(trainer_collection) {
//   fetch(TRAINERS_URL, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify( {
//       trainer_collection
//   })
//     .then(function(response) {
//       return response.json()
//     })
//     .then(function(json) {
//       console.log(json)
// })
// })

function getTrainers() {
  // debugger
  fetch(TRAINERS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    // body: JSON.stringify( {
    //   trainer_collection
    // })
  })
    .then(response => response.json())
    .then(json => {
      console.log(json)
    })
    }
  )}
// function getPokemon() {
//
// }
//
// function getButton() {
//   document.createElement
// }
//
// function getTrainerCard() {
//
// }
