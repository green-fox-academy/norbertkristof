import Aircraft from "./aircraft";
import F16 from "./f16";
import F35 from "./f35";

export default class Carrier {
    listOfAircrafts: Aircraft[];
    hP: number;
    ammoStorage: number;
    
    constructor(hP: number, aircraftCount: number, ammoStorage: number = 500) {
    this.listOfAircrafts = [];
    this.hP = hP;
    this.ammoStorage = ammoStorage;
    }

    add(aircraft: Aircraft):void {
        this.listOfAircrafts.push(aircraft);
    }

    fill() {
        
    }

}