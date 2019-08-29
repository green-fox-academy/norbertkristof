'use strict';

import Contestant from "./contestant";
import Player from "./player";

export default class Bet {
    private betID: number;
    private amount: number;
    private player: Player;
    private contestant: Contestant;

    constructor(amount: number, player: Player, contestant: Contestant) {
        if (player.getName() == undefined || contestant.getName() == undefined) {
            console.log('Invalid player or contestant input.');
        } else if (amount < 0) {
            console.log('Betting amount cannot be negative.')
        } else {
            this.betID = Math.floor(Math.random() * 9000) + 1000;
            this.amount = amount;
            this.player = player;
            this.contestant = contestant;
        }
    }

    getContestant(): Contestant {
        return this.contestant;
    }

    getAmount(): number {
        return this.amount;
    }

    getBetID(): number {
        return this.betID;
    }
}