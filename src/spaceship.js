

class Spaceship {
    constructor(name, crew, phasers, shields, cloaked = false, warpDrive = "disengaged", docked = true, phasersCharge = "uncharged") {
        this.name = name
        this.phasers = phasers
        this.shields = shields
        this.cloaked = cloaked
        this.warpDrive = warpDrive
        this.phasersCharge = phasersCharge
        this.crew = crew
        this.docked = docked
        
        for(const member of this.crew){
            member.currentShip = this   
        }

        if (this.crew.length !== 0){
            this.docked = false
        }
    
    }    
}
