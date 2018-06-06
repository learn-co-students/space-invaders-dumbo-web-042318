class Spaceship {
    constructor(name, positions, phasers, shields) {
        this.name = name;
        this.crew = positions;
        this.phasers = phasers;
        this.shields = shields;
        this.cloaked = false;
        this.warpDrive = "disengaged";
        if (positions.length !== 0 && positions !== undefined) {
            this.docked = false;
            positions.forEach(position => position.currentShip = this);
        } else {
            this.docked = true;  
        } 
        this.phasersCharge = "uncharged";
        
    }


}
