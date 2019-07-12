import { Car } from './Car';

class Station {
    gasAmount: number = 1000;
  
    refill(car: Car): void {
      this.gasAmount = this.gasAmount - (car.capacity - car.gasAmount);
    }
  
  }

export { Station };

let station: Station = new Station();
let car1: Car = new Car();
let car2: Car = new Car(0, 100);
let tesla: Car = new Car(0, 0);
console.log(station);

station.refill(car1);
console.log(station);
console.log(car1);

station.refill(car2);
console.log(station);
console.log(car2);

station.refill(tesla);
console.log(station);
console.log(tesla);