import {Director} from "./director";
import {AssetBuilder} from "./asset-builder";

console.log(`Hello World: \nKarla Carvajal\nAlejandro Ayala\nAlberto Arias\n`);

const director = new Director();
const assetBuilder = new AssetBuilder();

const table = director.buildTable(assetBuilder);
console.log(`Asset: ${table.toString()}`)

const computer = director.buildComputer(assetBuilder);
console.log(`Asset: ${computer.toString()}`)

const chair = director.buildChair(assetBuilder);
console.log(`Asset: ${chair.toString()}`)
