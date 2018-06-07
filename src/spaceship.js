class Spaceship {

  constructor (name, crew, phasers, shields, cloaked = false, warpDrive = 'disengaged', phasersCharge = 'uncharged') {

    this.name = name
    this.phasers = phasers
    this.shields = shields
    this.cloaked = cloaked
    this.warpDrive = warpDrive
    this.phasersCharge = phasersCharge
    this.crew = crew

    if (crew.length === 0) {
      this.docked = true;
    } else {
      this.docked = false;
      for (let i of crew) {
        i.currentShip = this;
      }
    }
  }
}
