function createGame(player1, player2, hour) {
  return `
        <li>
          <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
          <strong>${hour}</strong>
          <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
        </li>

`
}

let delay = -0.4
function createCard(date, day, games) {
  delay = delay + 0.4
  return `

<div class="card" style="animation-delay: ${delay}s">
            <h2>${date} <span>${day}</span></h2>
            <ul>
            ${games}  
            </ul>
          </div>
`
}

document.querySelector("#cards").innerHTML =
  createCard(
    "24/11",
    "quinta",
    createGame("switzerland", "cameroon", "07:00") +
      createGame("portugal", "uruguay", "13:00") +
      createGame("brazil", "serbia", "16:00")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("serbia", "cameroon", "07:00") +
      createGame("switzerland", "brazil", "13:00") +
      createGame("portugal", "uruguay", "16:00")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("serbia", "switzerland", "16:00") +
      createGame("portugal", "uruguay", "12:00") +
      createGame("brazil", "cameroon", "16:00")
  )
