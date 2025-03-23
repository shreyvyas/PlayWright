class Vehicle {

    //in javascript public, protected, priavte and default access specifier not available

    constructor(name, maker, engine){
        this.name;
        this.maker;
        this.engine;
    }

    getCarDetails(){
        console.log(this.name + this.maker + this.engine);
    }


}