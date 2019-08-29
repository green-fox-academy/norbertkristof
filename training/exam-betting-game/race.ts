// Create a Race class. This class will simulate a race. 
// It has 2 private fields which must be set through the constructor.

// contestants - it will store all of the contestants attending the race
// players - it will store all of the players
// and 1 public method

// startRace() - this will simulate a race
// first you need to evaluate the race by setting the placement field of 
// the contestants to a random number (1 <= x <= contestants.length)
// please keep in mind that every contestant's placement should be unique
// after the evaluation, write the placements to the console in increasing order (use the toString() method)
// to keep things simple a bet is won if the contestant won the race and the 
// player will win the double price of the money he made the bet with
// finally you need to write the winners to the console in the following format
// {name} has won {money}$ with the bet: {betId}

'use strict';

import Contestant from "./contestant";
import Player from "./player";
import Bet from "./bet";

export default class Race {
    private contestants: Contestant[] = [];
    private players: Player[] = [];

    addContestant(contestant: Contestant) {
        this.contestants.push(contestant);
    }

    addPlayer(player: Player) {
        this.players.push(player);
    }

    startRace() {
        if (this.contestants.length == 0 || this.players.length == 0) return;

        let placements: number[] = this.contestants.map((contestant) => contestant.getPlacement());
        this.contestants.forEach((contestant, index) => {
            if (contestant.getPlacement() == 0) {
                let randomPlacement: number = Math.floor(Math.random() * this.contestants.length) + 1;
                while (placements.indexOf(randomPlacement) != -1) {
                    randomPlacement = Math.floor(Math.random() * this.contestants.length) + 1;
                }
                placements[index] = randomPlacement;
                contestant.setPlacement(randomPlacement);
            }
        })

        let sortedContestants: Contestant[] = this.contestants.sort((a, b) => a.getPlacement() - b.getPlacement());

        sortedContestants.forEach((contestant) => console.log(contestant.toString()));

        let winners: Player[] = this.players.filter((player) => player.getBets().filter((bet) => bet.getContestant() == sortedContestants[0]).length != 0)

        winners.forEach((winner) => {
            let winningBets: Bet[] = winner.getBets().filter((bet) => bet.getContestant() == sortedContestants[0])
            winningBets.forEach((bet) => {
                winner.winMoney(bet.getAmount() * 2);
                console.log(`${winner.getName()} won ${bet.getAmount() * 2}$ with the bet: ${bet.getBetID()}`);
            })
        })
    }
}