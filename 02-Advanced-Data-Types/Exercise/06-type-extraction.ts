let names = {
  fName: "John",
  lName: "Doe",
  age: 22,
  getPersonInfo() {
    return `${this.fName} ${this.lName}, age ${this.age}`;
  },
};
let location1 = {
  city: "Boston",
  street: "Nowhere street",
  number: 13,
  postalCode: 51225,
  getAddressInfo() {
    return `${this.street} ${this.number}, ${this.city} ${this.postalCode}`;
  },
};

type NamesType = typeof names;
type LocationType = typeof location1;
type PersonType = NamesType & LocationType;

function createCombinedFunction(names: NamesType, location: LocationType) {
  return function (person: PersonType) {
    console.log(
      `Hello, ${person.getPersonInfo()} from ${person.getAddressInfo()}`
    );
  };
}

let combinedFunction = createCombinedFunction(names, location1);
let combinedPerson = Object.assign({}, names, location1);
combinedFunction(combinedPerson);
