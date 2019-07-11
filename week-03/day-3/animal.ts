/* Create an Animal class
Every animal has a hunger value, which is a whole number
Every animal has a thirst value, which is a whole number
when creating a new animal object these values are created with the default 50 value
Every animal can eat() which decreases their hunger by one
Every animal can drink() which decreases their thirst by one
Every animal can play() which increases both by one */

class Animal {
    hunger: number = 50;
    thirst: number = 50;
    
    constructor(hunger: number, thirst: number) {
        this.hunger = hunger;
        this.thirst = thirst;
    }
    eatNow() {
        return this.hunger --;
    }
        drinkNow(){
            return this.thirst --;
        }

        playNow(){
            return this.hunger ++ && this.thirst ++;
        }
    }
  
let myTest1: Animal = new Animal(50, 50);

//console.log(myTest1.eatNow());
//console.log(myTest1.drinkNow());


myTest1.eatNow();
myTest1.drinkNow();
myTest1.playNow();

console.log(myTest1);

//console.log(myTest1.playNow());

