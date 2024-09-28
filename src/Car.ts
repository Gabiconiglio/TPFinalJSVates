import { Vehicle } from "./Vehicle";

export class Car extends Vehicle {
  private _numberOfDoors: number;

  constructor(
    brand: string,
    model: string,
    maximumSpeed: number,
    numberOfDoors: number
  ) {
    super(brand, model, maximumSpeed);
    this._numberOfDoors = numberOfDoors;
  }

  public get numberOfDoors() {
    return this._numberOfDoors;
  }
  public set numberOfDoors(numberOfDoors: number) {
    this._numberOfDoors = numberOfDoors;
  }

  accelerate(speed: number): void {
    console.log(`The car is accelerating to ${speed} km/h.`);
  }
  curb(): string {
    return "The car is braking";
  }
}
