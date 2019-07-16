'use strict';

abstract class Instrument {
    protected name: string;
    abstract play(): void;

    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

}

abstract class StringedInstrument extends Instrument {
    protected numberOfStrings: number;
    abstract sound(): string;

    constructor(name: string, numofstr: number) {
        super(name);
        this.numberOfStrings = numofstr;
    }

    play(): void {
        console.log(this.getName() + ' a ' + this.numberOfStrings + 'stringed instrument that goes ' + this.sound() + '\n');
    };
}

class ElectricGuitar extends StringedInstrument {
    constructor(numofstr: number = 6) {
        super('Electric Guitar', numofstr);
    }

    sound(): string {
        return 'Twang';
    }
}

class BassGuitar extends StringedInstrument {
    constructor(numofstr: number = 4) {
        super('Bass Guitar', numofstr);
    }

    sound(): string {
        return 'Duum-duum-duum';
    }
}

class Violin extends StringedInstrument {
    constructor(numofstr: number = 4) {
        super('Violin', numofstr);
    }

    sound(): string {
        return 'Screech';
    }
}

export { ElectricGuitar, BassGuitar, Violin };