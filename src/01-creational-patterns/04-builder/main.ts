import IglooDirector from './igloo-director'
import CastleDirector from './castle-director'

const IGLOO = IglooDirector.construct()
const CASTLE = CastleDirector.construct()

console.log(IGLOO.construction())
console.log(CASTLE.construction())
