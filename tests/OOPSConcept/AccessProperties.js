class BMW{

    constructor(){
        this.v = new Vehicle("bmw", "vw", "petrol");
    }

    showDetails(){
        this.v.getCarDetails();
    }




}

let vw = new BMW();
vw.showDetails();