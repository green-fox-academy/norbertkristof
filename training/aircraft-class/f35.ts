import Aircraft from "./aircraft";

export default class F16 extends Aircraft {

    constructor(type: string, ammo: number, maxAmmo: number, baseDamage: number) {
        super(type, ammo, maxAmmo, baseDamage);
        this.type = 'F35';
        this.ammo = ammo;
        this.maxAmmo = 12;
        this.baseDamage = 50;

    }        
}