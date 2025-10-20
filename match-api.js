// match-api.js
fetch('match%20template.json')
  .then(res => res.json())
  .then(data => {
    const urlParams = new URLSearchParams(window.location.search);
    const playerId = urlParams.get('player_id');
    const playerName = urlParams.get('name');

    const match = data["Match data"][0];
    let players = match.players;

    // Filter by player_id or name
    if (playerId) {
      players = players.filter(p => p.player_id === playerId);
    } else if (playerName) {
      players = players.filter(p => p.name.toLowerCase() === playerName.toLowerCase());
    }

    // Replace players array with filtered results
    match.players = players;

    // Display the result
    document.body.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
  });
