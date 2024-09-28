import { IVehicle } from "../src/IVehicle";

export class Vehicle implements IVehicle {
  private _brand: string;
  private _model: string;
  private _maximumSpeed: number;

  constructor(brand: string, model: string, maximumSpeed: number) {
    this._brand = brand;
    this._model = model;
    this._maximumSpeed = maximumSpeed;
  }
  public get brand() {
    return this._brand;
  }
  public set brand(brand: string) {
    this._brand = brand;
  }
  public get model() {
    return this._model;
  }
  public set model(model: string) {
    this._model = model;
  }
  public get maximumSpeed() {
    return this._maximumSpeed;
  }
  public set maximumSpeed(maximumSpeed: number) {
    this._maximumSpeed = maximumSpeed;
  }
  accelerate(speed: number): void {
    console.log("Method 'accelerate()' must be implemented.");
  }
  curb(): string {
    return "The vehicle is braking";
  }
}
