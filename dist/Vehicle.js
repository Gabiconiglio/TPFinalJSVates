export class Vehicle {
  constructor(brand, model, maximumSpeed) {
    this._brand = brand;
    this._model = model;
    this._maximumSpeed = maximumSpeed;
  }
  get brand() {
    return this._brand;
  }
  set brand(brand) {
    this._brand = brand;
  }
  get model() {
    return this._model;
  }
  set model(model) {
    this._model = model;
  }
  get maximumSpeed() {
    return this._maximumSpeed;
  }
  set maximumSpeed(maximumSpeed) {
    this._maximumSpeed = maximumSpeed;
  }
  accelerate(speed) {
    console.log("Method 'accelerate()' must be implemented.");
  }
  curb() {
    return "The vehicle is braking";
  }
}
