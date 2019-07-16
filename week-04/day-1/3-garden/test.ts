'use strict'

import Flower from './flower';
import Tree from './tree';
import Garden from './garden';

const myFlower: Flower = new Flower('blue');
const myFlower2: Flower = new Flower('blue2');
const myFlower3: Flower = new Flower('blue3');
const myTree: Tree = new Tree('yellow');

let myGarden: Garden = new Garden();
myGarden.addFlower(myFlower);
myGarden.addFlower(myFlower2);
myGarden.addFlower(myFlower3);
myGarden.trees.push(myTree);

myGarden.waterPlants(10);
myGarden.waterPlants(20);