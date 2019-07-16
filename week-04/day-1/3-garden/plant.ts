'use strict'

class Plant {
    color: string;
    waterAmount: number;
    waterAbsorbRate: number;

    constructor(color: string, waterAbsorbRate: number = 1) {
        this.color = color;
        this.waterAmount = 0;
        this.waterAbsorbRate = waterAbsorbRate;
    }


    watering(ammount: number): void {
        this.waterAmount += ammount * this.waterAbsorbRate;
    }
}

export default Plant;