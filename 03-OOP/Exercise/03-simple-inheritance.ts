class Vehicle {
  constructor(public brand: string) {}
  drive(): string {
    return `Driving a ${this.brand}`;
  }
}

class Car extends Vehicle {
  constructor(public brand: string, public model: string) {
    super(brand);
  }

  override drive(): string {
    return `Driving a ${this.brand} ${this.model}`;
  }
}

const car = new Car("Toyota", "Corolla");
console.log(car.drive());
