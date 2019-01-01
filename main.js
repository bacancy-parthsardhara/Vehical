var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var car_type;
(function (car_type) {
    car_type[car_type["Hatchback"] = 1] = "Hatchback";
    car_type[car_type["Sedan"] = 2] = "Sedan";
})(car_type || (car_type = {}));
var car_brand;
(function (car_brand) {
    car_brand[car_brand["Jeep"] = 1] = "Jeep";
    car_brand[car_brand["Datsun"] = 2] = "Datsun";
})(car_brand || (car_brand = {}));
var bike_brand;
(function (bike_brand) {
    bike_brand[bike_brand["Giant"] = 1] = "Giant";
    bike_brand[bike_brand["GT_Bikes"] = 2] = "GT_Bikes";
    bike_brand[bike_brand["Santa_Cruz"] = 3] = "Santa_Cruz";
    bike_brand[bike_brand["Trek"] = 4] = "Trek";
})(bike_brand || (bike_brand = {}));
var bicycle_brand;
(function (bicycle_brand) {
    bicycle_brand[bicycle_brand["Atlas"] = 1] = "Atlas";
    bicycle_brand[bicycle_brand["Avon"] = 2] = "Avon";
    bicycle_brand[bicycle_brand["BSA"] = 3] = "BSA";
})(bicycle_brand || (bicycle_brand = {}));
var Vehical = /** @class */ (function () {
    function Vehical() {
    }
    return Vehical;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(type, brand, model, enginetype, yearofpurchase) {
        var _this = _super.call(this) || this;
        _this.type = car_type;
        _this.brand = car_brand;
        _this.type = type;
        _this.brand = brand;
        _this.model = model;
        _this.engine_type = enginetype;
        _this.yop = yearofpurchase;
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
        return _this;
    }
    return Car;
}(Vehical));
var Bike = /** @class */ (function (_super) {
    __extends(Bike, _super);
    function Bike(brand1, model1, enginetype1, yearofpurchase1) {
        var _this = _super.call(this) || this;
        _this.brand1 = bike_brand;
        _this.brand1 = bike_brand;
        _this.model1 = model1;
        _this.engine_type1 = enginetype1;
        _this.yop1 = yearofpurchase1;
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
        return _this;
    }
    return Bike;
}(Vehical));
var Bicycle = /** @class */ (function (_super) {
    __extends(Bicycle, _super);
    function Bicycle(brand, model, yearofpurchase) {
        var _this = _super.call(this) || this;
        _this.brand = bicycle_brand;
        _this.brand = brand;
        _this.model = model;
        _this.yop = yearofpurchase;
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
        return _this;
    }
    return Bicycle;
}(Vehical));
function submitcar() {
    var type = (document.getElementById('type').value);
    var brand = (document.getElementById('brand').value);
    var model = (document.getElementById('model').value);
    var enginetype = (document.getElementById('enginetype').value);
    var yearofpurchase = (document.getElementById('yearofpurchase').value);
    var cyz = new Car(type, brand, model, enginetype, yearofpurchase);
}
function submitbike() {
    var brand1 = (document.getElementById('brand1').value);
    var model1 = (document.getElementById('model1').value);
    var enginetype1 = (document.getElementById('enginetype1').value);
    var yearofpurchase1 = (document.getElementById('yearofpurchase1').value);
    var abc = new Bike(brand1, model1, enginetype1, yearofpurchase1);
}
function submitbicycle() {
    var brand2 = (document.getElementById('brand2').value);
    var model2 = (document.getElementById('model2').value);
    var yearofpurchase2 = (document.getElementById('yearofpurchase2').value);
    var abcd = new Bicycle(brand2, model2, yearofpurchase2);
}
