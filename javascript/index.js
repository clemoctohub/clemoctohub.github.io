var game;

function start(){
    const tokens = window.location.search.split('&');
    let name = tokens[0].substring(12);
    let gender = tokens[1].substring(7);
    game = new Game(name,gender);
}

start();

function updateScreen(texte){
    switch(texte){
        case "look":
            document.getElementById("text-dis").innerHTML = game.getPlayerRoomName();
            break;
        default:
            document.getElementById("text-dis").innerHTML = "Wrong input please enter something correct";
            break;
    }
}