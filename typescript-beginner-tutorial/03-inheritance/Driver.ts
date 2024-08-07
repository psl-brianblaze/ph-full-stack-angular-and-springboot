import {Shape} from "./Shape";
import {Circle} from "./Circle";
import {Rectangle} from "./Rectangle";

let myShape: Shape = new Shape(10, 15);

console.log(myShape.getInfo()); // x=10, y=15

let circle: Shape = new Circle(10, 15, 20);

console.log(circle.getInfo()); // x=10, y=15, radius=20

let myRectangle: Shape = new Rectangle(0, 0, 3, 7);

console.log(myRectangle.getInfo()); // x=0, y=0, width=3, height=7


// Array
let shapes: Shape[] = [];

shapes.push(myShape);

shapes.push(circle);

shapes.push(myRectangle);


for (let shape of shapes) {
  console.log(shape.getInfo());
}


