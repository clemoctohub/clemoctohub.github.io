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
                this.#listObj.push(new Objet(0,"Repair Manual","none",true,"page 7506.. if you want to repair the robot you have to connect the red wire with the blue wire..."));
                this.#listObj.push(new Objet(1,"Log Book","none",true,".. we forgot to open the toilet's ventilation system.... On 8th march we found something alive on the planet."+
                    '\n'+"Marc and I went to the place to see it. It was not huge but very fascinating. "));
                this.#description = "You enter in a big room. There is a large table with some food just finished. The dishes has not been cleaned. There are many others rooms connected to it.";
                break;
            case "Equipment Room":
                this.#listFurniture.push(new Furniture("Cupboard"));
                this.#listFurniture.push(new Furniture("Tools table"));
                this.#listObj.push(new Objet(2,"Fuse","Alarm",true,""));
                this.#description = "This is the equipment Room. It is clean. There are some space suits and posters. There are the old space ships plan but they are no more usable.";
                break;
            case "Kitchen":
                this.#listFurniture.push(new Furniture("Lockers"));
                this.#description = "It is messy. The dishes have not been done. There are many Lockers here. They may contain something interesting.";
                break;
            case "Research":
                this.#listObj.push(new Objet(7,"Robot","none",true,"Hello I'm Jarvis how can I help you ?"));
                this.#listObj.push(new Objet(8,"Alien Observations"),"none","true","You can detect the alien with its heat. It seems to like a lot human food but is not interested by human itself.");
                this.#description = "There are many medecine tools and some giant tools with a viscous, fluorescent liquid. There is a big desk with useless books and tools.";
                break;
            case "Bedroom":
                this.#listObj.push(new Objet(9,"Navigation Room Key","Navigation Door",true,"Navigation Door Open !"));
                this.#description = "The room is dark. You enter and smell the worst odour of your life. A noise is coming from your right. You see something standing up."+'\n'
                    +"It is big and it looks exactly like the alien's description. Indeed, your are facing the alien..!";
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

    /*deleteObj(objID){
        
    }*/

    addObj(obj){
        this.#listObj.push(obj);
    }

    setEntered(){
        this.#entered = true;
    }

    getDescription(){
        return this.#description;
    }

    getDoor(){
        return this.#door;
    }
}