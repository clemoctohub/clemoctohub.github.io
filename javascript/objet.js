class Objet{
    constructor(id,name,useOn,usable,dialog){
        this.id = id;
        this.name = name;
        this.useOn = useOn;
        this.usable = usable;
        this.dialog= dialog;
    }

    getId(){
        return this.id;
    }

    isUseOn(obj){
        if(obj==this.useOn)
            return true;
        else
            return false;
    }

    getName(){
        return this.name;
    }

    getUsable(){
        return this.usable;
    }

    getDialog(){
        return this.dialog;
    }

    action(){
        return "Cannot use that";
    }
}

class Book extends Objet{
    constructor(id,name,useOn,usable,dialog){
        super(id,name,useOn,usable,dialog);
    }
    action(room,game){
        return this.getDialog();
    }
}

class Key extends Objet{
    constructor(id,name,useOn,usable,dialog,stillUse){
        super(id,name,useOn,usable,dialog);
        this.stillUse=stillUse;
    }
    action(room,game){
        console.log("here");
        if(room.getName()==this.useOn && this.usable<=game.getEtape() && this.stillUse==true){
            console.log("here2");
            this.stillUse = false;
            room.setDoor();
            return this.getDialog();
        }
        else if(room.getName()!=this.useOn)
            return "You can't use that here";
        else if(this.stillUse!=true)
            return "You can't use it anymore"
        else if(this.usable>game.getEtape()){
            if(game.getEtape()==0)
                return "You have to fix the alarm first!";
            else if(game.getEtape()==1)
                return "You have to fix the robot before!";
            else if(game.getEtape()==2)
                return "Search the alien !";
        }
    }
}

class Item extends Objet{
    constructor(id,name,useOn,usable,dialog,stillUse){
        super(id,name,useOn,usable,dialog);
        this.stillUse=stillUse;
    }
    action(room,game){
        if((room.getName()==this.useOn || this.useOn=="everywhere") && this.usable<=game.getEtape() && this.stillUse==true){
            this.stillUse = false;
            game.addEtape();
            return this.getDialog();
        }
        else if(room.getName()!=this.useOn && this.useOn!="everywhere")
            return "You can't use that here";
        else if(this.stillUse!=true)
            return "You can't use it anymore"
        else if(this.usable>game.getEtape()){
            if(game.getEtape()==0)
                return "You have to fix the alarm first!";
            else if(game.getEtape()==1)
                return "You have to fix the robot before!";
            else if(game.getEtape()==2)
                return "Search the alien !";
        }
    }
}