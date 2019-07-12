'use strict';

//TODO add Parrot(s)

class Pirate {
  healthPoints: number;
  name: string;
  gold: number;
  numberOfLegs: number;
  numberOfEyes: number;

  constructor(name: string, gold: number, numberOfLegs: number, numberOfEyes: number) {
    this.healthPoints = 100;
    this.name = name;
    this.gold = gold;
    if (numberOfLegs >= 2) {
      this.numberOfLegs = 2;
    } else {
      this.numberOfLegs = numberOfLegs;
    }
    if (numberOfEyes >= 2) {
      this.numberOfEyes = 2;
    } else {
      this.numberOfEyes = numberOfEyes;
    }
  }

  greet(): string {
    return `Ahoy, matey, I am ${this.name}, wiht HP: ${this.healthPoints} and I have ${this.gold}!`;
  }

  numberOfEyepathes(): number {
    return 2 - this.numberOfEyes;
  }

  amountOfGold(anotherPirate: Pirate): number {
    if (anotherPirate.numberOfEyes === 0 && anotherPirate.numberOfLegs === 1) {
      return this.gold;
    } else if (anotherPirate.name === 'Maria') {
      return this.gold;
    } else {
      return undefined;
    }
  }

  fight(anotherAngryPirate: Pirate): void {
    if (!this.isDead()) {
      this.healthPoints -=
        Math.ceil(Math.random() * 3) * anotherAngryPirate.numberOfEyes * anotherAngryPirate.numberOfLegs;
    }
    if (!anotherAngryPirate.isDead()) {
      anotherAngryPirate.healthPoints -=
        Math.ceil(Math.random() * 3) * this.numberOfEyes * this.numberOfLegs;
    }
    let smallAmount: number = Math.ceil(Math.random() * 3);

    if (anotherAngryPirate.gold >= smallAmount) {
      this.gold += smallAmount;
      anotherAngryPirate.gold -= smallAmount;
    }
  }

  isDead(): boolean {
    return this.healthPoints <= 0;
  }
}

export { Pirate };