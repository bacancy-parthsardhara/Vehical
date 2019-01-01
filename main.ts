enum car_type {
    Hatchback = 1,
    Sedan = 2,

}
enum car_brand {
    Jeep = 1,
    Datsun = 2,

}

enum bike_brand {
    Giant = 1,
    GT_Bikes = 2,
    Santa_Cruz = 3,
    Trek = 4,

}

enum bicycle_brand {
    Atlas = 1,
    Avon = 2,
    BSA = 3,
}

class Vehical {
    wheel: number;
    seat: number;
    price: number;

    constructor() {
    }
}
class Car extends Vehical {
    type = car_type;
    brand = car_brand;
    model: string;
    engine_type: string;
    yop: number;

    constructor(type, brand, model, enginetype, yearofpurchase) {
        super();
        this.type = type;
        this.brand = brand;
        this.model = model;
        this.engine_type = enginetype;
        this.yop = yearofpurchase;
        document.getElementById('p1').innerHTML = type;
        document.getElementById('p2').innerHTML = brand;
        document.getElementById('p3').innerHTML = model;
        document.getElementById('p4').innerHTML = enginetype;
        document.getElementById('p5').innerHTML = yearofpurchase;

        if (type == "Hatchback" && brand == "Jeep") {
            document.getElementById('p15').innerHTML = "price is 2000";
        }
        else if (type == "Hatchback" && brand == "Datsun") {
            document.getElementById('p15').innerHTML = "price is 2500";
        }
        else if (type == "Sedan" && brand == "Jeep") {
            document.getElementById('p15').innerHTML = "price is 300";
        }
        else {
            document.getElementById('p15').innerHTML = "price is 300";
        }

    }
}

class Bike extends Vehical {
    brand1 = bike_brand;
    model1: string;
    engine_type1: string;
    yop1: number;

    constructor(brand1, model1, enginetype1, yearofpurchase1) {
        super();
        this.brand1 = bike_brand;
        this.model1 = model1;
        this.engine_type1 = enginetype1;
        this.yop1 = yearofpurchase1;

        document.getElementById('p6').innerHTML = brand1;
        document.getElementById('p7').innerHTML = model1;
        document.getElementById('p8').innerHTML = enginetype1;
        document.getElementById('p9').innerHTML = yearofpurchase1;

        if (brand1 == "Giant") {
            document.getElementById('p14').innerHTML = "price is 2000";
        }
        else if (brand1 == "GT Bikes") {
            document.getElementById('p14').innerHTML = "price is 2500";
        }
        else if (brand1 == "Santa Cruz") {
            document.getElementById('p14').innerHTML = "price is 300";
        }
        else {
            document.getElementById('p14').innerHTML = "price is 300";
        }
    }
}

class Bicycle extends Vehical {
    brand = bicycle_brand;
    model: string;
    yop: number;
    constructor(brand, model, yearofpurchase) {
        super();
        this.brand = brand;
        this.model = model;
        this.yop = yearofpurchase;

        document.getElementById('p10').innerHTML = brand;
        document.getElementById('p11').innerHTML = model;
        document.getElementById('p12').innerHTML = yearofpurchase;

        if (brand == "Atlas") {
            document.getElementById('p13').innerHTML = "price is 2000";
        }
        else if (brand == "Avon") {
            document.getElementById('p13').innerHTML = "price is 2500";
        }
        else {
            document.getElementById('p13').innerHTML = "price is 300";
        }

    }
}



function submitcar() {

    let type = ((document.getElementById('type') as HTMLInputElement).value);
    let brand = ((document.getElementById('brand') as HTMLInputElement).value);
    let model = ((document.getElementById('model') as HTMLInputElement).value);
    let enginetype = ((document.getElementById('enginetype') as HTMLInputElement).value);
    let yearofpurchase = ((document.getElementById('yearofpurchase') as HTMLInputElement).value);

    let cyz = new Car(type, brand, model, enginetype, yearofpurchase);

}

function submitbike() {

    let brand1 = ((document.getElementById('brand1') as HTMLInputElement).value);
    let model1 = ((document.getElementById('model1') as HTMLInputElement).value);
    let enginetype1 = ((document.getElementById('enginetype1') as HTMLInputElement).value);
    let yearofpurchase1 = ((document.getElementById('yearofpurchase1') as HTMLInputElement).value);

    let abc = new Bike(brand1, model1, enginetype1, yearofpurchase1);
}

function submitbicycle() {
    let brand2 = ((document.getElementById('brand2') as HTMLInputElement).value);
    let model2 = ((document.getElementById('model2') as HTMLInputElement).value);
    let yearofpurchase2 = ((document.getElementById('yearofpurchase2') as HTMLInputElement).value);
    let abcd = new Bicycle(brand2, model2, yearofpurchase2);
}