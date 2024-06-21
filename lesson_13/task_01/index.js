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

const updatedFootballPlayers = footballPlayers.map(
    player => {
        const newName = player.name.replace('Player ', 'P');
        return { ...player, name: newName }
    });
console.log(updatedFootballPlayers);