import { AquaTheme, DarkTheme } from "./theme";
import { About, Careers } from "./web-page";

let aboutPage = new About(new DarkTheme());
let careersPage = new Careers(new AquaTheme());

console.log(aboutPage.getContent());
console.log(careersPage.getContent());