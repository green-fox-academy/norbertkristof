import Aircraft from "./aircraft";

export default class F16 extends Aircraft {

    constructor(type: string, ammo: number, maxAmmo: number, baseDamage: number) {
        super(type, ammo, maxAmmo, baseDamage);
        this.type = 'F16';
        this.ammo = ammo;
        this.maxAmmo = 8;
        this.baseDamage = 30;
    }
}