abstract class Course {
  constructor(public title: string, public duration: number) {}

  abstract getDescription(): string;
}

class ProgrammingCourse extends Course {
  constructor(
    public title: string,
    public duration: number,
    public language: string
  ) {
    super(title, duration);
  }

  override getDescription(): string {
    return `Programming Course: ${this.title} in ${this.language} - ${this.duration} hours`;
  }
}

class DesignCourse extends Course {
  constructor(
    public title: string,
    public duration: number,
    public tools: string[]
  ) {
    super(title, duration);
  }

  override getDescription(): string {
    return `Design Course: ${this.title} using ${this.tools} - ${this.duration} hours`;
  }
}

const jsCourse = new ProgrammingCourse("Intro to JavaScript", 40, "JavaScript");
const uiCourse = new DesignCourse("UX Fundamentals", 30, ["Figma", "Sketch"]);

console.log(jsCourse.getDescription());
console.log(uiCourse.getDescription());
