class Furniture{
    #name;
    #listObj = [];
    constructor(name){
        this.#name = name;
        switch(name){
            case "Cupboard":
                this.#listObj.push(new Item(3,"Heat_Detector","everywhere",2,"The beeper is ringing a lot and is showing the bedroom direction.. Go there.",true));
                break;
            case "Tools_Table":
                this.#listObj.push(new Objet(4,"Weapon","Alien",3,""));
                this.#listObj.push(new Key(10,"Bedroom_Key","Dining Room",3,"The bedroom door is open. Enter there.",true));
                break;
            case "Lockers":
                this.#listObj.push(new Item(5,"Graphic_Card","Research Basement",1,"You put the new card to its place but you have to connect some wires correctly..",true));
                this.#listObj.push(new Objet(6,"Food","Alien","none",3,"The Alien is looking at the food. He is interested by it. Suddenly he jumps on it and is starting to eat it."));
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