import {Shape} from "./Shape";
import {Circle} from "./Circle";
import {Rectangle} from "./Rectangle";

let circle: Shape = new Circle(10, 15, 20);
let rectangle: Rectangle = new Rectangle(0, 0, 3, 7);

let shapes: Shape[] = [];

shapes.push(circle);

shapes.push(rectangle);

for (let shape of shapes) {
  console.log("-----------------------------------");
  console.log(shape.getInfo());
  console.log(`Area = ${shape.calculateArea()}`);
  console.log("-----------------------------------");
}


