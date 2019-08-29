'use strict';

import Bet from "./bet";
import Contestant from "./contestant";

export default class Player {
    private name: string;
    private account: number;
    private bets: Bet[] = [];

    constructor(name: string, account: number) {
        if (name == '') {
            console.log('Please provide player name.');
        } else if (account < 0) {
            console.log('Starting account cannot be negative.');
        } else {
            this.name = name;
            this.account = account;
        }
    }

    getName(): string {
        return this.name;
    }

    getBets(): Bet[] {
        return this.bets;
    }

    makeBet(contestant: Contestant, amount: number) {
        if (amount <= this.account) {
            this.account -= amount;
            this.bets.push(new Bet(amount, this, contestant))
        }
    }

    winMoney(amount: number) {
        this.account += amount;
    }
}