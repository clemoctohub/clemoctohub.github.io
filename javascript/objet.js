class Objet{
    #id;
    #name;
    #useOn;
    #usable;
    #dialog;
    constructor(id,name,useOn,usable,dialog){
        this.#id = id;
        this.#name = name;
        this.#useOn = useOn;
        this.#usable = usable;
        this.#dialog= dialog;
    }

    getId(){
        return this.#id;
    }

    isUseOn(obj){
        if(obj==this.#useOn)
            return true;
        else
            return false;
    }

    getName(){
        return this.#name;
    }

    getUsable(){
        return this.#usable;
    }

    getDialog(){
        return this.#dialog;
    }
}