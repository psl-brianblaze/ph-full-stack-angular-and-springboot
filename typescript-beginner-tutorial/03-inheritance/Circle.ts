import {Shape} from "./Shape";

export class Circle extends Shape {

  constructor(readonly theX: number, readonly theY: number, private _radius: number) {
    super(theX, theY);
  }

  public get radius() {
    return this._radius;
  }

  public set radius(radius: number) {
    this._radius = radius;
  }

  public getInfo(): string {
    return super.getInfo() + `, radius=${this._radius}`;
  }

}
