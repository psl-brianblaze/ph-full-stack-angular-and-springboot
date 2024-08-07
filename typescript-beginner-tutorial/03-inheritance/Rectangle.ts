import {Shape} from "./Shape";

export class Rectangle extends Shape {

  constructor(private theX: number,
              private theY: number,
              private _width: number,
              private _length: number) {
    super(theX, theY);
  }

  public get width() {
    return this._width;
  }

  public set width(width: number) {
    this._width = width;
  }

  public get length() {
    return this._length;
  }

  public set length(length: number) {
    this._length = length;
  }

  public getInfo(): string {
    return `x=${this.theX}, y=${this.theY}, width=${this._width}, length=${this._length}`
  }

}
