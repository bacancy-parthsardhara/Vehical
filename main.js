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
    car_type[car_type["Minivan"] = 3] = "Minivan";
    car_type[car_type["Sport_utility_vehical"] = 4] = "Sport_utility_vehical";
})(car_type || (car_type = {}));
var car_brand;
(function (car_brand) {
    car_brand[car_brand["Jeep"] = 1] = "Jeep";
    car_brand[car_brand["Datsun"] = 2] = "Datsun";
    car_brand[car_brand["Spyker"] = 3] = "Spyker";
    car_brand[car_brand["Ladonda"] = 4] = "Ladonda";
    car_brand[car_brand["Mini"] = 5] = "Mini";
})(car_brand || (car_brand = {}));
var Vehical = /** @class */ (function () {
    function Vehical() {
        console.log('welcome in the Vehical Zone.');
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
        return _this;
    }
    return Car;
}(Vehical));
function submitcar() {
    var type1 = (document.getElementById('type').value);
    var brand = (document.getElementById('brand').value);
    var model = (document.getElementById('model').value);
    var enginetype = (document.getElementById('enginetype').value);
    var yearofpurchase = (document.getElementById('yearofpurchase').value);
    var cyz = new Car(type1, brand, model, enginetype, yearofpurchase);
}
