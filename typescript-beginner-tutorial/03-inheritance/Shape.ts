export class Shape {

  constructor(private _x: number, private _y: number) {
  }

  public set x(x: number) {
    this._x = x;
  }

  public get x() {
    return this._x;
  }

  public set y(y: number) {
    this._y = y;
  }

  public get y() {
    return this._y;
  }

  public getInfo(): string {
    return `x=${this._x}, y=${this._y}`
  }

}
