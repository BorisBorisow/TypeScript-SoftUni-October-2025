class Student {
  protected firstName: string; // protected -> тези свойства могат да се достъпват също от децата на класа, докато private е наличен само са текущия клас.
  protected lastName: string;
  protected year: number;

  static studentCount = 0;

  constructor(firstName: string, lastName: string, year: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.year = year;
    Student.studentCount++;
  }

  printInfo(): void {
    console.log(`${this.firstName} ${this.lastName} is in year ${this.year}`);
  }
}

let student1 = new Student("Max", "Musterman", 10);
student1.printInfo();

class GraduateStudent extends Student {
  private _thesisTitle: string;

  constructor(
    firstName: string,
    lastName: string,
    year: number,
    thesisTitle: string
  ) {
    super(firstName, lastName, year);
    this._thesisTitle = thesisTitle;
  }
  get thesisTitle(): string {
    return this._thesisTitle;
  }

  set thesisTitle(newTitle: string) {
    if (newTitle.length > 0) {
      this._thesisTitle = newTitle;
    } else {
      console.log("Invalid thesis title!");
    }
  }

  override printInfo(): void {
    super.printInfo();
    console.log(`Thesis title: ${this.thesisTitle}`);
  }
}
let student2 = new GraduateStudent("Mincho", "Petkov", 2, "Quantum Physics");
student2.thesisTitle = "";
student2.thesisTitle = "Some title";
student2.printInfo();

console.log(Student.studentCount);
// // method overloads:
// class Person {
//   greet(num: number): void;
//   greet(fName, lName: string): void;
//   greet(a: number | string, b?: string): void {
//     console.log(
//       typeof a === "number" ? "Your number: ${a}" : `Hello, ${a} ${b}`
//     );
//   }
// }

// let person = new Person();
// person.greet("John", "Doe");
// person.greet(3);
