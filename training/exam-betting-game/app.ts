'use strict';

import Contestant from "./contestant";
import Player from "./player";
import Race from "./race";

let cont1 = new Contestant('Pharos');
let cont2 = new Contestant('Jamón Serrano');
let cont3 = new Contestant('Niki Lauda');
let cont4 = new Contestant('Default Winner', 1);
let cont5 = new Contestant('Lance Armstrong');

let player1 = new Player('Barni', 100);
player1.makeBet(cont1, 30);
player1.makeBet(cont4, 70);
let player2 = new Player('Bugsey', 50);
player2.makeBet(cont2, 50);
let player3 = new Player('Scrooge McDuck', 2000);
player3.makeBet(cont4, 2000);
let player4 = new Player('Évi', 100);
player4.makeBet(cont4, 50);
player4.makeBet(cont5, 50);
let player5 = new Player('Mr Poorguy', 10);
player5.makeBet(cont1, 100);
player5.makeBet(cont2, 100);
player5.makeBet(cont3, 100);
player5.makeBet(cont4, 100);
player5.makeBet(cont5, 100);
player5.makeBet(cont4, 10);

const myRace = new Race();

myRace.addContestant(cont1);
myRace.addContestant(cont2);
myRace.addContestant(cont3);
myRace.addContestant(cont4);
myRace.addContestant(cont5);

myRace.addPlayer(player1);
myRace.addPlayer(player2);
myRace.addPlayer(player3);
myRace.addPlayer(player4);
myRace.addPlayer(player5);

myRace.startRace();