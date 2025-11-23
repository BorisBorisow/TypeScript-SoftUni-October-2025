abstract class Shape {
  color: string;
  constructor(color: string) {
    this.color = color;
  }
  abstract getArea(): number;
}

class Circle extends Shape {
  constructor(color: string, public radius: number) {
    super(color);
  }

  override getArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle extends Shape {
  constructor(color: string, public width: number, public heigth: number) {
    super(color);
  }

  override getArea(): number {
    return this.width * this.heigth;
  }
}

const circle = new Circle("red", 5);
console.log(circle.getArea());

const rectangle = new Rectangle("blue", 4, 6);
console.log(rectangle.getArea());
