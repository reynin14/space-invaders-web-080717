
class CrewMember {

  constructor(position, currentShip="Looking for a Rig") {
    this.position = position
    this.currentShip = currentShip
  }

  engageWarpDrive(){
    if (this.position === 'Pilot' && this.currentShip !== "Looking for a Rig"){
      this.currentShip.warpDrive = "engaged!"
      return this.currentShip.warpDrive
    } else {
      return "had no effect"
    }
  }

  setsInvisibility(){
    if (this.position === 'Defender' && this.currentShip !== "Looking for a Rig"){
      this.currentShip.cloaked = true
      return this.currentShip.cloaked
    } else {
      return "had no effect"
    }
  }

  chargePhasers(){
    if (this.position === 'Gunner' && this.currentShip !== "Looking for a Rig"){
      this.currentShip.phasersCharge = "charged!"
      return this.currentShip.phasersCharge
    } else {
      return "had no effect"
    }
  }

}
