class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = "disengaged"
    this.crew = crew
    crew = crew.map(member => {
      member.currentShip = this
    })

    // crew.map(function (member) {
    //   member.currentShip = this
    // }.bind(this))

    if (crew.length === 0) {
      this.docked = true
    } else {
      this.docked = false
    }

    this.phasersCharge = 'uncharged'
  }
}
