// ### Restaurant
// - Every restaurant has a `name`, the year it was `founded` and a list of `employees` who are working there.
// - It should have a method `guests arrived` which should instruct all employees to `work`
// - We should be able to `hire` an employee which will add it to the list of `employees`

'use strict';

import Employee from "./employee";
import Chef from "./chef";
import Manager from "./manager";
import Waiter from "./waiter";

export default class Restaurant {
    name: string;
    founded: string;
    listOfEmployees: Employee[];

    constructor(name: string, founded: string) {
        this.name = name;
        this.founded = founded;
        this.listOfEmployees = [];
    }

    guestsArrived(): void {
        this.listOfEmployees.forEach(element => {
          element.work();
        });
    }

    hireEmployee(employee: Employee):void {
              this.listOfEmployees.push(employee);
            }
          

}

let newRestaurant: Restaurant = new Restaurant('Gyerezabalni', '1988');
let pistaTheWaiter: Waiter = new Waiter('Pista', 4, 10);
let jozsiTheChef: Chef = new Chef('Jozsi');
let rezsoTheManager: Manager = new Manager('Rezso');
console.log(newRestaurant);
console.log(pistaTheWaiter);
console.log(jozsiTheChef);
console.log(rezsoTheManager);
pistaTheWaiter.work();
newRestaurant.hireEmployee(pistaTheWaiter);
newRestaurant.hireEmployee(jozsiTheChef);
newRestaurant.hireEmployee(rezsoTheManager);
jozsiTheChef.work();
jozsiTheChef.cook('csirkepaprikas');
jozsiTheChef.cook('csirkepaprikas');
jozsiTheChef.cook('lecso');
rezsoTheManager.work();
rezsoTheManager.work();
rezsoTheManager.work();
rezsoTheManager.work();
rezsoTheManager.work();
rezsoTheManager.haveAMeeting();
console.log(newRestaurant);
console.log(pistaTheWaiter);
console.log(jozsiTheChef);
console.log(rezsoTheManager);
