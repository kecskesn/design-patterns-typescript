import RoundHole from "./hole";
import SquareTubeAdapter from "./square-tube.adapter";
import { RoundTube, SquareTube } from "./tube";

const HOLE = new RoundHole(5);
const ROUND_TUBE = new RoundTube(5);
console.log(HOLE.fits(ROUND_TUBE));

const SMALL_SQ_TUBE = new SquareTube(5);
const LARGE_SQ_TUBE = new SquareTube(10);

// Error
// console.log(HOLE.fits(SMALL_SQ_TUBE));

const SMALL_SQ_TUBE_ADAPTER = new SquareTubeAdapter(SMALL_SQ_TUBE);
const LARGE_SQ_TUBE_ADAPTER = new SquareTubeAdapter(LARGE_SQ_TUBE);
console.log(HOLE.fits(SMALL_SQ_TUBE_ADAPTER));
console.log(HOLE.fits(LARGE_SQ_TUBE_ADAPTER));
