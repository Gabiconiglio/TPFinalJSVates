import { Vehicle } from "./Vehicle.js";
export class MotorBike extends Vehicle {
    constructor(brand, model, maximumSpeed, handlebarType) {
        super(brand, model, maximumSpeed);
        this._handlebarType = handlebarType;
    }
    get handlebarType() {
        return this._handlebarType;
    }
    set handlebarType(handlebarType) {
        this._handlebarType = handlebarType;
    }
    accelerate(speed) {
        console.log(`The motorbike is accelerating to ${speed} km/h.`);
    }
    curb() {
        return "The motorbike is braking";
    }
}
