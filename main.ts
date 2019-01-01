enum car_type
{
    Hatchback = 1,
    Sedan =2,
    Minivan = 3,
    Sport_utility_vehical = 4,
}
enum car_brand
{
    Jeep =1,
    Datsun = 2,
    Spyker = 3,
    Ladonda = 4,
    Mini = 5,    
}

class Vehical
{
    wheel:number;
    seat:number;
    price:number;

    constructor()
    {
        console.log('welcome in the Vehical Zone.');
    }
}
class Car extends Vehical
{
    type = car_type;
    brand = car_brand;
    model:string;
    engine_type: string;
    yop:number;

    constructor(type, brand, model, enginetype,yearofpurchase)
    {
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
    }    
        
}
function submitcar()
{

    let type1 = ((document.getElementById('type') as HTMLInputElement).value);
    let brand =((document.getElementById('brand') as HTMLInputElement).value);
    let model =((document.getElementById('model') as HTMLInputElement).value);
    let enginetype =((document.getElementById('enginetype') as HTMLInputElement).value);
    let yearofpurchase = ((document.getElementById('yearofpurchase') as HTMLInputElement).value);
    
   


    let cyz = new Car(type1, brand, model, enginetype,yearofpurchase);

}
