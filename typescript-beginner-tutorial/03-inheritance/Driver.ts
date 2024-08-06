import {Shape} from "./Shape";
import {Circle} from "./Circle";

let shape: Shape = new Circle(10, 15, 20);

console.log(shape.getInfo()); // x=10, y=15, radius=20
