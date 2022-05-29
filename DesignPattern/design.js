//SINGLETON DESIGN PATTERN


class Singleton {
    constructor(){
        if(Singleton._instance){
            console.warn("already created!");
            return Singleton._instance;
        }

        Singleton._instance = this;

        console.log("singleton created");

        this._createdTime = new Date();
    }

    static instance() {
        if(!Singleton._instance){
            return new Singleton();
        }

        return Singleton._instance;
    }

    createdTime() {
        return this._createdTime.toISOString();
    }
}
Singleton._instance = null;
module.exports = Singleton;
