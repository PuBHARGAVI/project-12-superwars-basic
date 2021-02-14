const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];
    // Create players using for loop
    // Type your code here
    for(let player=0; player<players.length;player++)
    {
        if(player%2==0){
            playerType="hero";
        }
        else{
            playerType="villain";
        }
        let playerDetails=
        {
            name:PLAYERS[player],
            strength:getRandomStrength(),
            image:"images/super-"+(player+1)+".png",
            type:playerType
        };
        detailedPlayers.push(playerDetails);
    }
    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
    //console.log(Math.ceil(Math.random()*100));
    var max=100,min=0;
    return Math.ceil(Math.random()*100);
}

const buildPlayers = (players, type) => {
    let template = '';
    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here
    for(var player=0;player<players.length;player++){
    if(players[player].type==type)
    {
    template=template+`<div class="player">
    <img src="${players[player].image}" alt="">
    <div class="name">${players[player].name}</div>
    <div class="strength">${players[player].strength}</div>
    </div>
    `;
    }
}
    return template;
}
// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');

}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}