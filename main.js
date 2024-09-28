import { Car } from "./dist/Car.js";
import { MotorBike } from "./dist/Motorbike.js";

let vehicles = [
  new Car("Ford", "EcoSport", 180, 5),
  new Car("Fiat", "Uno", 120, 3),
  new MotorBike("Honda", "XR250 TORNADO", 220, "Curvo"),
  new MotorBike("Honda", "CB1000R", 230, "Recto"),
];

for (let index = 0; index < vehicles.length; index++) {
  const element = vehicles[index];
  console.log(element);
  element.accelerate(element.maximumSpeed);
  console.log(element.curb());
}
