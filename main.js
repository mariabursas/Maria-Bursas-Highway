function Vehicle (name){
    this.wheels = 4;
    this.name=name;
}
Vehicle.prototype.start=function(){
    console.log(`${this.name} the vehicle is started`);

}
Vehicle.prototype.stop=function(){
    console.log(`${this.name} the vehicle is stoped`);

}
function Car (name){
    Vehicle.call(this, name);
}

Car.prototype=Object.create(Vehicle.prototype);
Car.prototype.constructor=Car;

function Bus (name){
    Vehicle.call(this, name);
}

Bus.prototype=Object.create(Vehicle.prototype);
Bus.prototype.constructor=Bus;

function Motorcycle (name){
    Vehicle.call(this, name);
    this.wheels = 2;

}

Motorcycle.prototype=Object.create(Vehicle.prototype);
Motorcycle.prototype.constructor=Motorcycle;

function Highway (name){
    this.name=name;
    this.vehicles = [];
}

Highway.prototype.allowVehicle = function (vehicles) {
    var highwayName = this.name;
    this.vehicles = vehicles;
    this.vehicles.forEach(function(vehicle)
 {   if (vehicle.wheels>2) {
        console.log(`The ${vehicle.name} is allowed on the ${highwayName} highway.`);
    } else {
        console.log(`This vehicle ${vehicle.name} is not allowed on the ${highwayName} highway`);
    }})
};

var car1 = new Car("Red Car");
car1.start();
car1.stop();
car1.start();
var bus1 = new Bus("School Bus");
bus1.start();
var motorcycle1 = new Motorcycle("Harley");
motorcycle1.start();
var vehiclesList1=[car1, bus1, motorcycle1];
var car2 = new Car("Blue Car");
var car3 = new Car("Green Car");
var bus2 = new Bus("Pink bus");
vehiclesList2=[car2, car3, bus2]
var bigHighway= new Highway("bigHighway");
bigHighway.allowVehicle(vehiclesList1);
var smallHighway= new Highway("smallHighway");
smallHighway.allowVehicle(vehiclesList2);