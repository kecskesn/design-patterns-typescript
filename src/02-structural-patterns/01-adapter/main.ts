import RoundHole from "./hole";
import SquareTubeAdapter from "./square-tube.adapter";
import { RoundTube, SquareTube } from "./tube";

let hole = new RoundHole(5);
let roundTube = new RoundTube(5);
console.log(hole.fits(roundTube));

let smallSquareTube = new SquareTube(5);
let largeSquareTube = new SquareTube(10);

// Error
// console.log(hole.fits(smallSquareTube));

let smallSquareTubeAdapter = new SquareTubeAdapter(smallSquareTube);
let largeSquareTubeAdapter = new SquareTubeAdapter(largeSquareTube);
console.log(hole.fits(smallSquareTubeAdapter));
console.log(hole.fits(largeSquareTubeAdapter));
