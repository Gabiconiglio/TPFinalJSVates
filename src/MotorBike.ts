import { Vehicle } from "./Vehicle";

export class MotorBike extends Vehicle {
  private _handlebarType: string;

  constructor(
    brand: string,
    model: string,
    maximumSpeed: number,
    handlebarType: string
  ) {
    super(brand, model, maximumSpeed);
    this._handlebarType = handlebarType;
  }

  public get handlebarType() {
    return this._handlebarType;
  }
  public set handlebarType(handlebarType: string) {
    this._handlebarType = handlebarType;
  }

  accelerate(speed: number): void {
    console.log(`The motorbike is accelerating to ${speed} km/h.`);
  }
  curb(): string {
    return "The motorbike is braking";
  }
}
