var game;

function start(){
    const tokens = window.location.search.split('&');
    let name = tokens[0].substring(12);
    let gender = tokens[1].substring(7);
    game = new Game(name,gender);
    game.addObjetPlayer(new Objet(11,"SAS_key","SAS door",true,"You use the key to enter in the base. The decompression is good"));
    //addSomeText("In a very distant future, humanity is exploring potential habitable planets through thousands of galaxies. On the planet XF606-A, a scientific research team finds out that there is alien life. They are very excited to be able to study one of the creatures. Two weeks after the first discovery, they catch one alien and bring it back to their base - a little living quarter adapted to human conditions on the planet XF606-A. They record the capture in the database of the base. Three days after their capture, the scientists stop sending any communication. They don't answer any call, cannot be contacted and don't do the week’s summary video of discovery they usually do. The SLC (space life company) which oversees this kind of mission, sends you, "+ name +" to the base on the planet XF606-A to find out what happened.");

}

function updateScreen(texte){
    addSomeText("> "+texte);
    document.getElementById("texte").value = "";
    const txt = texte.split(' ');

    switch(txt[0].toLowerCase()){
        case "look":
            addSomeText(dispInfo());
            break;
        case "north":
            if(game.getPlayerRoom().getDoor()=="north"){
                addSomeText("There is a door closed there. Find the key to open it.");
            }
            else if(game.getPlayerRoom().getNorth()!=""){
                game.setPlayerRoom(game.getPlayerRoom().getNorth());
                dispPlace();
                let phrase = "";
                if(game.getPlayerRoom().getEntered()==false){
                    addSomeText(dispInfo());
                    game.getPlayerRoom().setEntered();
                }
                else{
                    phrase += game.getPlayerRoom().getDescription();
                    addSomeText(phrase);
                }
            }
            else{
                addSomeText("There is nothing here.");
            }
            break;
        case "south":
            if(game.getPlayerRoom().getDoor()=="south"){
                addSomeText("There is a door closed there. Find the key to open it.");
            }
            else if(game.getPlayerRoom().getSouth()!=""){
                game.setPlayerRoom(game.getPlayerRoom().getSouth());
                dispPlace();
                let phrase = "";
                if(game.getPlayerRoom().getEntered()==false){
                    addSomeText(dispInfo());
                    game.getPlayerRoom().setEntered();
                }
                else{
                    phrase += game.getPlayerRoom().getDescription();
                    addSomeText(phrase);
                }
            }
            else{
                addSomeText("There is nothing here");
            }
            break;
        case "east":
            if(game.getPlayerRoom().getDoor()=="east"){
                addSomeText("There is a door closed there. Find the key to open it.");
            }
            else if(game.getPlayerRoom().getEast()!=""){
                game.setPlayerRoom(game.getPlayerRoom().getEast());
                dispPlace();
                let phrase = "";
                if(game.getPlayerRoom().getEntered()==false){
                    addSomeText(dispInfo);
                    game.getPlayerRoom().setEntered();
                }
                else{
                    phrase += game.getPlayerRoom().getDescription();
                    addSomeText(phrase);
                }
            }
            else{
                addSomeText("There is nothing here");
            }
            break;
        case "west":
            if(game.getPlayerRoom().getDoor()=="west"){
                addSomeText("There is a door closed there. Find the key to open it.");
            }
            else if(game.getPlayerRoom().getWest()!=""){
                game.setPlayerRoom(game.getPlayerRoom().getWest());
                dispPlace();
                let phrase = "";
                if(game.getPlayerRoom().getEntered()==false){
                    addSomeText(dispInfo());
                    game.getPlayerRoom().setEntered();
                }
                else{
                    phrase += game.getPlayerRoom().getDescription();
                    addSomeText(phrase);
                }
            }
            else{
                addSomeText("There is nothing here.");
            }
            break;
        case "inventory":
            let phrase = `You are holding : 
            `;
            if(game.getPlayerObjets().length>0){
                for(let i=0;i<game.getPlayerObjets().length;i++){
                    phrase += `- `+game.getPlayerObjets()[i].getName()+`
                    `;
                    if(i<i<game.getPlayerObjets().length-1)
                        phrase+`,`;
                }
                addSomeText(phrase);
            }
            else{
                addSomeText("You have nothing in your inventory");
            }
            break;
        case "grab":
            if(game.getPlayerRoomName()=="Research Basement" && txt[1]=="Robot"){
                addSomeText("You can't grab this.");
            }
            else{
                var objGrab = findObj(txt[1]);
                if(txt[1]==undefined){
                    addSomeText("Enter an object name");
                }
                else if(objGrab==null){
                    addSomeText("There is no such object here");
                }
                else{
                    addSomeText("You grab a "+txt[1]+".");
                }
            }
            break;
        case "inspect":
            if(txt[1]==undefined){
                addSomeText("Enter a furniture name");
            }
            else{
                let sentence = dispFurnitureInfo(txt[1]);
                if(sentence==null){
                    addSomeText("There is no such furniture here");
                }
                else{
                    addSomeText("You inspect "+txt[1]+ ". You can see "+sentence);
                }
            }
            break;
        case "put":
            var objGrab = findObjInventory(txt[1]);
            if(txt[1]==undefined){
                addSomeText("Enter an object name");
            }
            else if(objGrab==null){
                addSomeText("You don't have this object");
            }
            else{
                addSomeText("You put "+txt[1]+" on the floor of this room");
            }
            break;
        case "ask":
            if(game.getPlayerRoomName()!="Research Basement"){
                addSomeText("There is nothing to ask here");
            }
            else if(txt[1]==undefined){
                addSomeText("You have to ask somebody or something");
            }
            else if(txt[1]=="Robot" && (txt[2]==undefined || txt[2].toLowerCase()!="name" || txt[2].toLowerCase()!="origin" || txt[2].toLowerCase()!="dairy" || txt[2].toLowerCase("alien"))){
                addSomeText(`Hi ! I'm ready to help what would you like to know ? You can ask me about this topics : 
                - name,
                - origin,
                - dairy,
                - alien`);
            }
            else if(txt[1]=="Robot" && txt[2]=="name"){
                addSomeText("My name is Jarvis. May I help you ?");
            }
            else if(txt[1]=="Robot" && txt[2]=="origin"){
                addSomeText("I don't know where I am from sorry. I have a single home and it is this one.");
            }
            else if(txt[1]=="Robot" && txt[2]=="dairy"){
                addSomeText("Dois completer cette partie");
            }
            else if(txt[1]=="Robot" && txt[2]=="alien"){
                addSomeText("Here are the information entered about 'alien' topic : Discovered two months ago. The specimen was very little but it started to grow very fast here. It started to create viscous liquid. It is now 2 meters high we secured it in this lab. He is very excited or angry. We have to be careful. It seems to want to eat our food.");
            }
            break;
        case "help":
            break;
        default:
            addSomeText("Wrong input. Please write help if you need help.");
            break;
    }
    addSpace();
}

function addSpace(){
    var place = document.createElement("br");
    document.getElementById("text-dis").appendChild(place);
}

function dispPlace(){
    var place = document.createElement("li");
    var textnode2 = document.createTextNode(game.getPlayerRoomName());
    place.style.fontFamily = "Orbitron";
    place.style.fontWeight= "bold";
    place.appendChild(textnode2);
    document.getElementById("text-dis").appendChild(place);
}

function dispInfo(){
    let phrase = "";
    phrase += game.getPlayerRoom().getDescription();
    if(game.getPlayerRoom().getFurnitures().length>0){
        phrase += `There are some furnitures :
        ` ;
        for(let i=0;i<game.getPlayerRoom().getFurnitures().length;i++){
            phrase += `- ` + game.getPlayerRoom().getFurnitures()[i].getName() + `
            `;
        }
    }
    if(game.getPlayerRoom().getListObj().length>0){
        phrase += `You can see some objects in the room : 
        `;
        for(let i=0;i<game.getPlayerRoom().getListObj().length;i++){
            phrase += `- ` + game.getPlayerRoom().getListObj()[i].getName() + `
            `;
        }
    }
    if(game.getPlayerRoom().getNorth()!="")
        phrase += `There is something north. `;
    if(game.getPlayerRoom().getSouth()!="")
        phrase += `A corridor is going to the south. `;
    if(game.getPlayerRoom().getWest()!="")
        phrase += `You can see an entry on the west. `;
    if(game.getPlayerRoom().getEast()!="")
        phrase += `You can go to the east, there is another room.`;
    return phrase;
}

function findObj(texte){
    for(let i=0;i<game.getPlayerRoom().getListObj().length;i++){
        if(game.getPlayerRoom().getListObj()[i].getName()==texte){
            var temp = game.getPlayerRoom().getListObj()[i];
            game.addObjetPlayer(game.getPlayerRoom().getListObj()[i]);
            game.removeObjPlayer(game.getPlayerRoom().getListObj()[i]);
            return temp;
        }
    }
    for(let i=0;i<game.getPlayerRoom().getFurnitures().length;i++){
        for(let j=0;j<game.getPlayerRoom().getFurnitures()[i].getListObj().length;j++){
            if(game.getPlayerRoom().getFurnitures()[i].getListObj()[j].getName()==texte){
                var temp = game.getPlayerRoom().getFurnitures()[i].getListObj()[j];
                game.addObjetPlayer(game.getPlayerRoom().getListObj()[i]);
                game.removeObjPlayer(game.getPlayerRoom().getListObj()[i]);
                return temp;
            }
        }
    }
    return null;
}

function findObjInventory(texte){
    for(let i=0;i<game.getPlayerObjets().length;i++){
        if(game.getPlayerObjets()[i].getName()==texte){
            var temp = game.getPlayerObjets()[i];
            game.getPlayerRoom().addObj(game.getPlayerObjets()[i]);
            game.getPlayerObjets().splice(i,1);
            return temp;
        }
    }
    return null;
}

function dispFurnitureInfo(txt){
    let phrase = "";
    for(let i=0;i<game.getPlayerRoom().getFurnitures().length;i++){
        if(game.getPlayerRoom().getFurnitures()[i].getName()==txt){
            for(let j=0;j<game.getPlayerRoom().getFurnitures()[i].getListObj().length;j++){
                phrase += "- "+game.getPlayerRoom().getFurnitures()[i].getListObj()[j].getName()+ "\n";
                return phrase;
            }
        }
    }
    return null;
}

function addSomeText(taPhrase){
    var node = document.createElement("p");
    var textnode = document.createTextNode(taPhrase);
    node.style.fontFamily = "Orbitron";
    node.appendChild(textnode);
    document.getElementById("text-dis").appendChild(node);
}

start();