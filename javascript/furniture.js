class Furniture{
    #name;
    #listObj = [];
    constructor(name){
        this.#name = name;
        switch(name){
            case "Cupboard":
                this.#listObj.push(new Objet(3,"Heat_Detector","none",2,"The beeper is ringing a lot and is showing the bedroom direction.."));
                break;
            case "Tools table":
                this.#listObj.push(new Objet(4,"Weapon","Alien",3,""));
                this.#listObj.push(new Objet(10,"Bedroom_Key","Bedroom Door",3,"The bedroom door is open"));
                break;
            case "Lockers":
                this.#listObj.push(new Objet(5,"Graphic_Card","Robot",1,"You put the new card to its place but you have to connect some wires correctly.."));
                this.#listObj.push(new Objet(6,"Food","Alien","none",3,"The Alien is looking at the food. He is interested by it. SUddenly he jumps on it and is starting to eat it."));
                break;
        }
    }

    getName(){
        return this.#name;
    }

    getListObj(){
        return this.#listObj;
    }
}