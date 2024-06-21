// filter
const arrFoFilter = [1, 2, 4, 6, 7, 9];

console.log(arrFoFilter.filter(element=> 
(element % 2 === 0)
    // if (element % 2 === 0) {
    //     return true;
    // } else {
    //     return false;
    // }

));


const footballPlayers = [
    { id: 1, name: "Player 1", position: "Goalkeeper" },
    { id: 2, name: "Player 2", position: "Defender" },
    { id: 3, name: "Player 3", position: "Defender" },
    { id: 4, name: "Player 4", position: "Defender" },
    { id: 5, name: "Player 5", position: "Midfielder" },
    { id: 6, name: "Player 6", position: "Midfielder" },
    { id: 7, name: "Player 7", position: "Midfielder" },
    { id: 8, name: "Player 8", position: "Forward" },
    { id: 9, name: "Player 9", position: "Forward" },
    { id: 10, name: "Player 10", position: "Forward" }
];

console.log(footballPlayers.filter((player) => (player.position === "Forward")
));
