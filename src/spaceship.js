class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name
    this.crew = crew
    this.phasers = phasers
    this.shields = shields
    // this.constructor.all.push(this)
    this.cloaked = false
    this.warpDrive = "disengaged"
    this.phasersCharge = "uncharged"
    this.setDocked()
    this.setPilot()
  }

  setDocked() {
    if (this.crew.length > 0) {
      this.docked = false
    }else {
      this.docked = true
    }
  }
  // static allShips() {
  //   console.log(this.all)
  // }

  setPilot() {
    for(const pilot of this.crew) {
      pilot.currentShip = this
    }
  }

  
}
// Spaceship.all = []
