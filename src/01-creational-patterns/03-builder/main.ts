import IglooDirector from './igloo-director'
import CastleDirector from './castle-director'

/*
 * Having a director class in your program isn’t strictly necessary. 
 * You can always call the building steps in a specific order directly from the client code.
 * However, the director class might be a good place to put various construction routines so you can reuse them across your program.
 */
const IGLOO = IglooDirector.construct()
const CASTLE = CastleDirector.construct()

console.log(IGLOO.construction())
console.log(CASTLE.construction())
