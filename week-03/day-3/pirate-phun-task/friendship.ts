'use strict';

import { Pirate } from './pirate';

class Friendship {
  name: string;
  private piratesAboard: Pirate[];

  constructor(name: string) {
    this.name = name;
    this.piratesAboard = [];
  }

  addPirate(pirateToAdd: Pirate): void {
    this.piratesAboard.push(pirateToAdd);
  }

  fighUntilDeath(): void {
    while (this.isAnyoneAlive()) {
      let indexOfPierateOne: number = Math.ceil(Math.random() * this.piratesAboard.length - 1);
      let indexOfPierateTwo: number = Math.ceil(Math.random() * this.piratesAboard.length - 1);
      (this.piratesAboard[indexOfPierateOne]).fight(this.piratesAboard[indexOfPierateTwo]);
      console.log(this.toString());
      let onlyOneIsAlive: boolean =
        this.piratesAboard.filter(function (pirate: Pirate) {
          return !pirate.isDead()
        }).length === 1;
      if (onlyOneIsAlive) {
        let allTheGold: number = this.piratesAboard.map(function (pirate: Pirate) {
          if (pirate.gold > 0) {
            return pirate.gold;
          } else {
            return 0;
          }
        }).reduce(function (a: number, b: number) { return a + b; })

        let survivor: Pirate =
          this.piratesAboard.filter(function (pirate: Pirate) {
            return !pirate.isDead();
          })[0];
        survivor.gold = allTheGold;
        return;
      }
    }
  }

  isAnyoneAlive(): boolean {
    return this.piratesAboard.some(function (pirate: Pirate) {
      return !pirate.isDead();
    })
  }

  toString(): string {
    let resultGreetings: string = `This ship is :${this.name}, pirates:\n`;
    for (let index = 0; index < this.piratesAboard.length; index++) {
      const pirateToTalk: Pirate = this.piratesAboard[index];
      resultGreetings += pirateToTalk.greet() + "\n";
    }
    return resultGreetings;
  }
}

let tobias: Pirate = new Pirate("Tobias", 100, 2, 1);
let joseph: Pirate = new Pirate("Joseph", 99, 2, 1);
let maria: Pirate = new Pirate("Maria", 101, 0, 1);
let bela: Pirate = new Pirate("Bela", 100, 2, 1);
let bella: Pirate = new Pirate("Bella", 100, 2, 1);
let jack: Pirate = new Pirate("Jack", 100, 0, 2);
let daniella: Pirate = new Pirate("Daniella", 100, 0, 2);
let daniel: Pirate = new Pirate("Daniel", 100, 2, 0);
let tom: Pirate = new Pirate("Tom", 100, 0, 2);

let ourFriendShip: Friendship = new Friendship("friendzone");
ourFriendShip.addPirate(tobias);
ourFriendShip.addPirate(joseph);
ourFriendShip.addPirate(maria);
ourFriendShip.addPirate(bela);
ourFriendShip.addPirate(daniella);
ourFriendShip.addPirate(daniel);
ourFriendShip.addPirate(tom);
ourFriendShip.addPirate(jack);

console.log(ourFriendShip.fighUntilDeath());
console.log(ourFriendShip.toString());