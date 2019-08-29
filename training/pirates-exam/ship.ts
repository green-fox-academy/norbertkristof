// You must be able to add new pirates to the ship. It must have only one captain!
// You must create the following methods:
// getPoorPirates() which returns a list of names containing the pirates that
// have a wooden leg and have less than 15 golds
// getGolds() which returns the sum of gold owned by the pirates of that particular ship
// lastDayOnTheShip() which calls the pirates' party() method.
// prepareForBattle() which calls
// the pirates' work() method 5 times
// then the ship's lastDayOnTheShip() method.

"use strict";

import Pirate from "./pirates";

export default class Ship {
    name: string;
    listOfPirates: Pirate[]; // ship tartalmazza kalozok array-et

  constructor(name: string) {
    this.name = name;
    this.listOfPirates = [];
  }

  addNewPirate(pirate: Pirate): void {
    if (pirate.isCaptain == false) {
      this.listOfPirates.push(pirate);
    } else {
      for (let i: number = 0; i < this.listOfPirates.length; i++) {
        if (this.listOfPirates[i].isCaptain == true) {
          throw new Error("Ship already has a captain!");
        }
      }
      this.listOfPirates.push(pirate);
    }
  }
  getPoorPirates(): string[] {
    let names: string[] = [];
    this.listOfPirates.forEach(element => {
      if (element.hasWoodenLeg && element.amountOfGold < 15) {
        names.push(element.name);
      }
    });
    return names;
  }
  getGolds(): number {
    let goldNumber: number = 0; // for each element of the ARRAY !!!!
    this.listOfPirates.forEach(element => {
      // mint egy for loop! element = [i]-edik eleme a listanak
      goldNumber += element.amountOfGold;
    });
    return goldNumber;
  }
  lastDayOnTheShip(): void {
    this.listOfPirates.forEach(element => {
      element.party();
    });
  }

  prepareForBattle(): void {
    this.listOfPirates.forEach(element => {
      for (let i: number = 0; i < 5; i++) {
        element.work();
      }
    });
    this.lastDayOnTheShip();
  }
}

let tobias: Pirate = new Pirate("Tobias", true, true);
let joseph: Pirate = new Pirate("Joseph", false, true);
let maria: Pirate = new Pirate("Maria", false, true);
let krumpli: Ship = new Ship("friendzone");
krumpli.addNewPirate(tobias);
krumpli.addNewPirate(joseph);
krumpli.addNewPirate(maria);
console.log(krumpli);
