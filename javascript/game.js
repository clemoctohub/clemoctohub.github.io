class Game{
    #player;
    #alien;
    #room = [];
    constructor(name,gender){
        this.#room.push(new Room("Outside","SAS","SAS","SAS","SAS","everywhere"));
        this.#room.push(new Room("SAS","Dining Room","","","","none"));
        this.#room.push(new Room("Dining Room","Research Basement","SAS","Bedroom","Equipment Room","east"));
        this.#room.push(new Room("Bedroom","","","","Dining Room","none"));
        this.#room.push(new Room("Equipment Room","Research Basement","","Dining Room","none"));
        this.#room.push(new Room("Research Basement","","Dining Room","Kitchen","Equipment Room","none"));
        this.#room.push(new Room("Kitchen","","","Communication Room","Research Basement","east"));
        this.#room.push(new Room("Communication Room","","","","Kitchen","none"));
        this.#player = new Player(name,gender,100,this.#room[0]);
    }

    getPlayerName(){
        return this.#player.getName();
    }

    getPlayerGender(){
        return this.#player.getGender();
    }

    getPlayerLife(){
        return this.#player.getLife();
    }

    getPlayerRoomName(){
        return this.#player.getRoomName();
    }
}