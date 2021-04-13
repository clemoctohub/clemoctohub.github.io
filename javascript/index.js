var game;

function start(){
    const tokens = window.location.search.split('&');
    let name = tokens[0].substring(12);
    let gender = tokens[1].substring(7);
    game = new Game(name,gender);
    game.addObjetPlayer(new Key(11,"SAS_key","Outside",0,"You use the key to enter in the base. The decompression is good",true));
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
                    if(game.getPlayerRoomName()=="Dining Room"){
                        addSomeText("You enter in the dinig room when suddenly, an alarm is starting. You hear a voice saying : 'Alimentation in critical situation. Need to replace the fuse in the Dining Room'. Go find the fuse and use it !");
                    }
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
                    if(game.getPlayerRoomName()=="Bedroom"){
                        addSomeText("You enter and smell the worst odour of your life. A noise is coming from your right. You see something standing up."+'\n'
                        +"It is big and it looks exactly like the alien's description. Indeed, your are facing the alien..!");
                        addSomeText("What do you want to do ?");
                        document.getElementById("texte").readOnly = true;

                        var button2 = document.createElement("button");
                        var button1 = document.createElement("button");
                        button2.innerHTML = "Attack the Alien";
                        button1.innerHTML = "Feed the Alien";
                        button2.addEventListener("click", function() {
                            button1.disabled = true;
                            button2.disabled = true;
                            if(getOb("Weapon")!=null){
                                var button3 = document.createElement("button");
                                var button4 = document.createElement("button");
                                button3.innerHTML = "Attack the Head";
                                button4.innerHTML = "Attack the Chest";
                                button3.addEventListener("click", ()=>{
                                    button3.disabled = true;
                                    button4.disabled = true;
                                    addSomeText("You attack the alien's head but it is too hard. He jumps in you and kill you");
                                    var objDiv = document.getElementById("text-dis");
                                    objDiv.scrollTop = objDiv.scrollHeight;
                                    setTimeout(() => { window.location.href = "../html/end.html";  }, 5000);
                                }, false);
                                button4.addEventListener("click", ()=>{
                                    button3.disabled = true;
                                    button4.disabled = true;
                                    addSomeText("You attack the alien in the chest and it seems suffering. He was very weak and fall steep. You defeat it.");
                                    document.getElementById("texte").readOnly = false;
                                    var objDiv = document.getElementById("text-dis");
                                    objDiv.scrollTop = objDiv.scrollHeight;
                                }, false);
                                document.getElementById("text-dis").appendChild(button3);
                                document.getElementById("text-dis").appendChild(button4);
                                var objDiv = document.getElementById("text-dis");
                                objDiv.scrollTop = objDiv.scrollHeight;
                            }
                            else{
                                addSomeText("You don't have any weapon on you. The alien attacks you and kill you");
                                var objDiv = document.getElementById("text-dis");
                                objDiv.scrollTop = objDiv.scrollHeight;
                                setTimeout(() => { window.location.href = "../html/end.html";  }, 5000);
                            }
                        }, false);
                        
                        button1.addEventListener("click", function() {
                            button1.disabled = true;
                            button2.disabled = true;
                            if(getOb("Food")!=null){
                                addSomeText("The alien seems interested by the food. He comes to it an begin to eat it. He is not interested by you anymore. You can look around you.");
                                document.getElementById("texte").readOnly = false;
                                var objDiv = document.getElementById("text-dis");
                                objDiv.scrollTop = objDiv.scrollHeight;
                            }
                            else{
                                addSomeText("You don't have any food on you. You don't get enough time to move. The alien jumps on you and kill you.");
                                var objDiv = document.getElementById("text-dis");
                                objDiv.scrollTop = objDiv.scrollHeight;
                                setTimeout(() => { window.location.href = "../html/end.html";  }, 5000);
                            }
                        }, false);

                        document.getElementById("text-dis").appendChild(button1);
                        document.getElementById("text-dis").appendChild(button2);
                    }
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
            let phrase = "You are holding : ";
            if(game.getPlayerObjets().length>0){
                for(let i=0;i<game.getPlayerObjets().length;i++){
                    phrase += "- "+game.getPlayerObjets()[i].getName();
                    if(i<i<game.getPlayerObjets().length-1)
                        phrase+",";
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
                else if(objGrab.getName()=="Bodies"){
                    addSomeText("Congratulation you won the game!!!");
                    setTimeout(() => { window.location.href = "../html/win.html";  }, 5000);
                }
                else{
                    addSomeText("You grab a "+objGrab.getName()+".");
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
                addSomeText("There is nobody to ask here");
            }
            else if(txt[1]==undefined){
                addSomeText("You have to ask somebody or something");
            }
            else if(txt[1]!="Robot"){
                addSomeText("This person doesn't exist here");
            }
            else if(game.getEtape()<2){
                addSomeText("You have to repair the Robot")
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
            addSomeText("This game is such as an escape game. You have to resolve task and finish the game. To achieve your mission you can grab object, put object, ask somebody a question (ask + name + what), you can look at the room to have a description, you can inspect furnitures, you can look at your inventory by typping inventory and you can move to another room writting north, south, east or west.");
            break;
        case "use":
            if(txt[1]==undefined){
                addSomeText("Enter the name of the object you want to use.");
            }
            else{
                var objGrab = getOb(txt[1]);
                if(objGrab==null){
                    addSomeText("You don't have this object");
                }
                else{
                    let phraseUse = objGrab.action(game.getPlayerRoom(),game);
                    addSomeText(phraseUse);
                    if(phraseUse=="You put the new card to its place but you have to connect some wires correctly.."){
                        document.getElementById("texte").readOnly = true;

                        var button2 = document.createElement("button");
                        button2.innerHTML = "Blue wire";
                        button2.addEventListener("click", function() {
                            addSomeText("You made a mistake by connecting the wires. You better had read the Manual Repair. The robot explosed and you die.");
                            var objDiv = document.getElementById("text-dis");
                            objDiv.scrollTop = objDiv.scrollHeight;
                            setTimeout(() => { window.location.href = "../html/end.html";  }, 5000);
                            window.location.href = "../html/end.html";
                        }, false);

                        var button1 = document.createElement("button");
                        button1.innerHTML = "Red wire";
                        button1.addEventListener("click", function() {
                            addSomeText("Succesfully connected !");
                            document.getElementById("texte").readOnly = false;
                            button1.disabled = true;
                            button2.disabled = true;
                            var objDiv = document.getElementById("text-dis");
                            objDiv.scrollTop = objDiv.scrollHeight;
                        }, false);

                        document.getElementById("text-dis").appendChild(button1);
                        document.getElementById("text-dis").appendChild(button2);
                    }
                }
            }
            break;
        default:
            addSomeText("Wrong input. Please write help if you need help.");
            break;
    }
    addSpace();
    var objDiv = document.getElementById("text-dis");
    objDiv.scrollTop = objDiv.scrollHeight;
}

function getOb(texte){
    for(let i=0;i<game.getPlayerObjets().length;i++){
        if(game.getPlayerObjets()[i].getName()==texte){
            return game.getPlayerObjets()[i];
        }
    }
    return null;
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
        phrase += "There are some furnitures :" ;
        for(let i=0;i<game.getPlayerRoom().getFurnitures().length;i++){
            phrase += "- " + game.getPlayerRoom().getFurnitures()[i].getName();
        }
    }
    if(game.getPlayerRoom().getListObj().length>0){
        phrase += "You can see some objects in the room : ";
        for(let i=0;i<game.getPlayerRoom().getListObj().length;i++){
            phrase += "- "+ game.getPlayerRoom().getListObj()[i].getName();
        }
    }
    if(game.getPlayerRoom().getNorth()!="")
        phrase += "There is something north. ";
    if(game.getPlayerRoom().getSouth()!="")
        phrase += "A corridor is going to the south. ";
    if(game.getPlayerRoom().getWest()!="")
        phrase += "You can see an entry on the west. ";
    if(game.getPlayerRoom().getEast()!="")
        phrase += "You can go to the east, there is another room.";
    return phrase;
}

function findObj(texte){
    for(let i=0;i<game.getPlayerRoom().getListObj().length;i++){
        if(game.getPlayerRoom().getListObj()[i].getName()===texte){
            var temp = game.getPlayerRoom().getListObj()[i];
            game.addObjetPlayer(game.getPlayerRoom().getListObj()[i]);
            game.removeObjPlayer(game.getPlayerRoom().getListObj()[i]);
            return temp;
        }
    }
    for(let i=0;i<game.getPlayerRoom().getFurnitures().length;i++){
        for(let j=0;j<game.getPlayerRoom().getFurnitures()[i].getListObj().length;j++){
            if(game.getPlayerRoom().getFurnitures()[i].getListObj()[j].getName()===texte){
                var temp = game.getPlayerRoom().getFurnitures()[i].getListObj()[j];
                game.addObjetPlayer(game.getPlayerRoom().getFurnitures()[i].getListObj()[j]);
                game.removeObjPlayer(game.getPlayerRoom().getFurnitures()[i].getListObj()[j]);
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
            }
            return phrase;
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