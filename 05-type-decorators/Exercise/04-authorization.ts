class MockAuthrizationService {
  constructor(
    private userRole: "Guest" | "PersonalDataAdministrator" | "Admin"
  ) {}

  canViewData(property: string) {
    switch (this.userRole) {
      case "Admin":
        return true;
      case "PersonalDataAdministrator":
        return ["name", "age"].includes(property);
      default:
        return false;
    }
  }
}

let mockAuthorizationService = new MockAuthrizationService("Admin");

function Authorize(authService: MockAuthrizationService) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalGetter = descriptor.get!;

    descriptor.get = function () {
      const isAllowed = authService.canViewData(propertyKey);

      if (!isAllowed) {
        throw new Error("You are not authorized to view this information");
      }

      return originalGetter.call(this);
    };
  };
}

class User {
  constructor(
    private _name: string,
    private _age: number,
    private _creditCardNumber: string
  ) {}

  @Authorize(mockAuthorizationService)
  get name() {
    return this._name;
  }

  @Authorize(mockAuthorizationService)
  get age() {
    return this._age;
  }

  @Authorize(mockAuthorizationService)
  get creditCardNumber() {
    return this._creditCardNumber;
  }
}

const user1 = new User("John Doe", 30, "ABCD-1234");
console.log(user1.name);
console.log(user1.age);
console.log(user1.creditCardNumber);

export {};
