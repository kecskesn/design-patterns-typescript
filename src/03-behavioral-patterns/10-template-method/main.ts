import { AndroidBuilder, IosBuilder } from "./phone-builder";

let androidBuilder = new AndroidBuilder();
androidBuilder.build();

console.log('=================');

let iosBuilder = new IosBuilder();
iosBuilder.build();