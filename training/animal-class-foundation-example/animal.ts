// Animal
// It must have ownerName and stores it's health's state isHealthy (true or false) and a healCost.
// It must have a method named heal(), that sets the isHealthy field's status to true
// It must have a method named isAdoptable that returns a boolean value whether it can be adopted or not - an animal can be adopted if it is healthy
// It must have a method named toString() that represents the Animal in the following format:

"use strict";

export default class Animal {
  ownerName: string;
  isHealthy: boolean;
  healCost: number;
  name: string;

  constructor(
    ownerName: string,
    isHealthy: boolean,
    healCost: number,
    name: string
  ) {
    this.ownerName = ownerName;
    this.isHealthy = isHealthy;
    this.healCost = healCost;
    this.name = name;
  }

  isAdoptable(): boolean {
    return this.isHealthy;
  }

  heal() {
    this.isHealthy = true;
  }

  toString(): void {
    if ((this.isHealthy = true)) {
      console.log(`${this.name} is healthy, and adoptable`);
    } else {
      console.log(
        `${this.name} is not healthy ${this.healCost} $ and not adoptable`
      );
    }
  }
}
