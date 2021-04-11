class Player{
    #name;
    #gender;
    #life;
    #room;
    #inventory = [];
    constructor(name,gender,life,room){
        this.#name = name;
        this.#gender = gender;
        this.#life = life;
        this.#room = room;
    }

    getName(){
        return this.#name;
    }

    getLife(){
        return this.#life;
    }

    getRoom(){
        return this.#room;
    }

    getRoomName(){
        return this.#room.getName();
    }

    getGender(){
        return this.#gender;
    }

    getInventory(){
        return this.#inventory;
    }

    setRoom(room){
        this.#room = room;
    }

    setLife(life){
        this.#life = life;
    }

    addInventory(objet){
        this.#inventory.push(objet);
    }

    removeObj(objet){
        this.#room.removeObj(objet);
    }
}