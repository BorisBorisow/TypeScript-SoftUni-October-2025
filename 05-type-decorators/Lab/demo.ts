class Point {
  constructor(private _x: number, private _y: number) {}
  @double
  set x(value: number) {
    this._x = value;
  }
  @double
  set y(value: number) {
    this._y = value;
  }
}

function double(target: Object, key: string, descriptor: PropertyDescriptor) {
  let originalSet = descriptor.set;

  descriptor.set = function (val: any) {
    originalSet?.call(this, val * 2);
  };
  return descriptor;
}

let p = new Point(2, 2);

p.x = 4;
console.log(p);
p.y = 22;
console.log(p);
