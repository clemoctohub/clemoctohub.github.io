class Game{
    #player;
    #alien;
    #room = [];
    #etape;
    constructor(name,gender){
        this.#room.push(new Room("Outside","SAS","","","","north"));
        this.#room.push(new Room("SAS","Dining Room","","","","none"));
        this.#room.push(new Room("Dining Room","Research Basement","SAS","Bedroom","Equipment Room","east"));
        this.#room.push(new Room("Bedroom","","","","Dining Room","none"));
        this.#room.push(new Room("Equipment Room","Research Basement","","Dining Room","","none"));
        this.#room.push(new Room("Research Basement","","Dining Room","Kitchen","Equipment Room","none"));
        this.#room.push(new Room("Kitchen","","","Communication Room","Research Basement","east"));
        this.#room.push(new Room("Communication Room","","","","Kitchen","none"));
        this.#player = new Player(name,gender,100,this.#room[0]);
        this.#etape = 0;
    }

    getPlayerName(){
        return this.#player.getName();
    }

    setPlayerRoom(room){
        for(let i=0;i<this.#room.length;i++){
            if(this.#room[i].getName()==room)
                this.#player.setRoom(this.#room[i]);
        }
    }

    addObjetPlayer(objet){
        this.#player.addInventory(objet);
    }

    removeObjPlayer(objet){
        this.#player.removeObj(objet);
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

    getPlayerRoom(){
        return this.#player.getRoom();
    }

    getPlayerObjets(){
        return this.#player.getInventory();
    }

    getEtape(){
        return this.#etape;
    }

    addEtape(){
        this.#etape++;
    }
}