class Spaceship {
  constructor(name, crew=[], phasers, shields, cloaked=false, warpDrive="disengaged", docked=true, phasersCharge="uncharged") {
    this.name = name
    this.crew = crew
    this.phasers = phasers
    this.shields = shields
    this.cloaked = cloaked
    this.warpDrive = warpDrive
    this.docked = (this.crew).length === 0 ? true : false
    this.phasersCharge = phasersCharge
    this.addCrewMembers()
  }

  addCrewMembers() {
    (this.crew).forEach(crewMember => crewMember.currentShip = this)
  }
}
