import { Vehicle } from "./Vehicle";
export class Car extends Vehicle {
    constructor(brand, model, maximumSpeed, numberOfDoors) {
        super(brand, model, maximumSpeed);
        this._numberOfDoors = numberOfDoors;
    }
    get numberOfDoors() {
        return this._numberOfDoors;
    }
    set numberOfDoors(numberOfDoors) {
        this._numberOfDoors = numberOfDoors;
    }
    accelerate(speed) {
        console.log(`The car is accelerating to ${speed} km/h.`);
    }
    curb() {
        return "the car is braking";
    }
}
