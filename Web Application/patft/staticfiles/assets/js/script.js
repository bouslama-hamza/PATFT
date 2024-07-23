$(document).ready(function() {
    // Get the player image path from the data attribute
    const playerImgSrc = $('#football-field').data('player-img');

    // Array of player data for 11 players with percentage positions
    const players = [
        { id: 'player1', number: 1, top: 48.33, left: 8.33 },  // Goalkeeper
        { id: 'player2', number: 2, top: 11.67, left: 27.78 }, // Defender
        { id: 'player3', number: 3, top: 33.33, left: 37.04 }, // Defender
        { id: 'player4', number: 4, top: 60.00, left: 39.81 }, // Defender
        { id: 'player5', number: 5, top: 83.33, left: 27.78 }, // Defender
        { id: 'player6', number: 6, top: 11.67, left: 58.33 }, // Midfielder
        { id: 'player7', number: 7, top: 33.33, left: 64.81 }, // Midfielder
        { id: 'player8', number: 8, top: 58.33, left: 64.81 }, // Midfielder
        { id: 'player9', number: 9, top: 83.33, left: 58.33 }, // Midfielder
        { id: 'player10', number: 10, top: 33.33, left: 85.19 }, // Forward
        { id: 'player11', number: 11, top: 50.00, left: 92.59 } // Forward
    ];

    // Iterate over the player data array to create and append each player element
    players.forEach(player => {
        // Create player element
        const playerDiv = $('<div>', { id: player.id, class: 'player', css: { top: player.top + '%', left: player.left + '%', transform: 'translate(-50%, -50%)' } });
        const playerImg = $('<img>', { src: playerImgSrc, alt: 'Player' });
        const playerNumber = $('<div>', { class: 'player-number', text: player.number });

        // Append elements
        playerDiv.append(playerImg);
        playerDiv.append(playerNumber);
        $('#football-field').append(playerDiv);

        // Make player draggable
        $('#' + player.id).draggable({
            containment: "#football-field"
        });
    });
});

$(document).ready(function() {
    $('#fullscreen-btn').on('click', function() {
        const field = document.getElementById('football-field');
        if (!document.fullscreenElement) {
            field.requestFullscreen().catch(err => {
                alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
            });
        } else {
            document.exitFullscreen();
        }
    });
});