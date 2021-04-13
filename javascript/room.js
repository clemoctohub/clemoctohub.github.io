class Room{
    #name;
    #north;
    #south;
    #east;
    #west;
    #listObj = [];
    #listFurniture = [];
    #entered;
    #description;
    #door;
    constructor(name,north,south,east,west,door){
        this.#name = name;
        this.#north = north;
        this.#south = south;
        this.#west = west;
        this.#east = east;
        this.#entered = false;
        this.#door = door;
        switch(name){
            case "Dining Room":
                this.#listObj.push(new Book(0,"Repair_Manual","none",0,"page 7506.. if you want to repair the robot you have to connect the red wire with the blue wire..."));
                this.#listObj.push(new Book(1,"Log_Book","none",0,".. we forgot to open the toilet's ventilation system.... On 8th march we found something alive on the planet."+
                    '\n'+"Marc and I went to the place to see it. It was not huge but very fascinating. "));
                this.#description = "You enter in a big room. There is a large table with some food just finished. The dishes has not been cleaned. There are many others rooms connected to it.";
                break;
            case "Equipment Room":
                this.#listFurniture.push(new Furniture("Cupboard"));
                this.#listFurniture.push(new Furniture("Tools_Table"));
                this.#listObj.push(new Item(2,"Fuse","Dining Room",0,"The alarm stopped congratulation.",true));
                this.#description = "This is the equipment Room. It is clean. There are some space suits and posters. There are the old space ships plan but they are no more usable.";
                break;
            case "Kitchen":
                this.#listFurniture.push(new Furniture("Lockers"));
                this.#description = "It is messy. The dishes have not been done. There are many Lockers here. They may contain something interesting.";
                break;
            case "Research Basement":
                this.#listObj.push(new Objet(7,"Robot","none",1,"Hello I'm Jarvis how can I help you ?"));
                this.#listObj.push(new Book(8,"Alien_Book","none",1,"You can detect the alien with its heat. It seems to like a lot human food but is not interested by human itself."));
                this.#description = "There are many medecine tools and some giant tools with a viscous, fluorescent liquid. There is a big desk with useless books and tools.";
                break;
            case "Bedroom":
                this.#listObj.push(new Key(9,"Navigation_Room_Key","Kitchen",3,"Navigation Door Open !",true));
                this.#description = "The room is dark. There are some bed on the side with stuff which might belongs to the crew but is not interesting for you.";
                break;
            case "Outside":
                this.#description = "Your on the surface of the XF606-A planet. It is red like mars. It seems without life."+'\n'+" Your are face to the SAS entry to enter in the base and see what is inside.";
                break;
            case "SAS":
                this.#description = "Your enter in the decompression SAS, your suit is on the right side. The rest of the base is silent. Nobody seems to be here.";
                break;
            case "Communication Room":
                this.#listObj.push(new Objet(12,"Bodies","none",0,""));
                this.#description = "You can see the bodies. They are still alive. Grab them to leave this place and go back to the head quarter !";
                break;
        }
    }

    getNorth(){
        return this.#north;
    }

    getSouth(){
        return this.#south;
    }

    getWest(){
        return this.#west;
    }

    getEast(){
        return this.#east;
    }

    getName(){
        return this.#name;
    }

    getListObj(){
        return this.#listObj;
    }

    getFurnitures(){
        return this.#listFurniture;
    }

    removeObj(objet){
        let condi = false;
        for(let i=0;i<this.#listObj.length;i++){
            if(this.#listObj[i]==objet){
                this.#listObj.splice(i,1);
                condi = true;
            }
        }
        if(condi==false){
            for(let i=0;i<this.#listFurniture.length;i++){
                for(let j=0;j<this.#listFurniture[i].getListObj().length;j++){
                    if(this.#listFurniture[i].getListObj()[j]==objet){
                        this.#listFurniture[i].getListObj().splice(j,1);
                    }
                }
            }
        }
    }

    addObj(obj){
        this.#listObj.push(obj);
    }

    setEntered(){
        this.#entered = true;
    }

    getEntered(){
        return this.#entered;
    }

    getDescription(){
        return this.#description;
    }

    getDoor(){
        return this.#door;
    }

    setDoor(){
        this.#door = "none";
    }
}