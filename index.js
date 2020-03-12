/***** Deliverable 1 *****/
document.addEventListener("DOMContentLoaded", function(){

const div = document.getElementsByClassName("player-container")[0]
const header = document.getElementById("header")
console.log("Here's your header:", header)



/***** Deliverable 2 *****/
let redText = document.getElementById("header").style.color = "red"

/***** Deliverable 3 *****/
console.log("PLAYERS array looks like this:", PLAYERS)
    PLAYERS.forEach(function (player){
        div.innerHTML += `
    <div class="player" data-number="${player.number}">
    <h3>
        ${player.name} (<em>${player.nickname}</em>)
    </h3>
    <img src="${player.photo}" alt="${player.name}">
    `

    });

/***** Deliverable 4 *****/
 let divLast = document.querySelector("[data-number='7']")
 divLast.remove()
   

})



