# OOP

\*\* Key-concepts: classes, objects, inheritancem asbstractionm polymorphism and encapsulation

**Modularity, Reusability, Flexibility and Estensibility, Simplified Maintenance**

### Classes and Objects

- a blueprint for creating objects
- defines the props and methods that objects based on the class will have
- can have constructurs for initializing objects props

#### For debugging with ts-node (without .js):

**create file:**

- .vscode/launch.json

```ts
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Debug TypeScript (ts-node)",
      "runtimeExecutable": "node",
      "runtimeArgs": [
        "-r",
        "ts-node/register"
      ],
      "args": [
        "${file}"
      ],
      "cwd": "${workspaceFolder}",
      "env": {
        "TS_NODE_PROJECT": "${workspaceFolder}/tsconfig.json"
      }
    }
  ]
}

```

### Core Principles of OOP

- **Encapsulation** - Скриваме вътрешните данни на обекта и ги правим достъпни само чрез контролирани методи. Така защитаваме състоянието на обекта и предотвратяваме неправилна употреба от външни класове.

```ts
class User {
  private password: string = "secret";

  checkPassword(input: string) {
    return input === this.password;
  }
}

const u = new User();
u.password; // ❌ недостъпно
u.checkPassword("secret"); // ✅ true
```

```ts
class BankAccount {
  private balance: number = 0;

  deposit(amount: number) {
    this.logTransaction("deposit", amount); // скрит детайл
    this.balance += amount;
  }

  getBalance() {
    return this.balance;
  }

  private logTransaction(type: string, amount: number) {
    // сложни операции като запис в база данни, валидации и т.н.
    console.log(`Transaction: ${type} - ${amount}`);
  }
}

const acc = new BankAccount();
acc.deposit(100); // потребителят не знае за logTransaction()
console.log(acc.getBalance()); // 100
```

- **Abstraction** - Показваме само това, което е важно, а сложните вътрешни детайли се скриват. Това опростява работата с обектите и прави кода по-лесен за използване и разбиране.

```ts
class CoffeeMachine {
  makeCoffee() {
    this.boilWater();
    return "Coffee is ready!";
  }

  private boilWater() {} // сложният метод е скрит
}

new CoffeeMachine().makeCoffee(); // човекът не знае детайлите
```

- **Inheritance** - Позволява създаване на нов клас, който наследява свойства и методи от друг клас. Така се постигат повторна употреба на код и разширяване на функционалността.

```ts
class Animal {
  eat() {
    console.log("eating");
  }
}

class Dog extends Animal {
  bark() {
    console.log("woof");
  }
}

const d = new Dog();
d.eat(); // наследено
d.bark(); // собствено
```

- **Polymorphism** - (много форми). Един и същ метод може да се държи по различен начин в различни класове. Това позволява гъвкавост — обектите изпълняват еднакви действия, но със собствено специфично поведение.

```ts
class Animal {
  speak() {
    console.log("animal sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("woof");
  }
}

class Cat extends Animal {
  speak() {
    console.log("meow");
  }
}

const animals = [new Dog(), new Cat()];
animals.forEach((a) => a.speak());
// woof
// meow
```

- **runtime** /dynamic polymorphism/ / различни обекти → различно поведение на един и същи метод (по време на изпълнение).

- **Method overriding** - Детският клас преписва (замества) метода на бащиния клас със собствена версия.

- **Method overloads** - Един и същи метод може да се извиква с различни типове параметри,
  като интерфейсът е един, но имплементацията е една.

## Solid Principles

- S: Single Responsibility Principle
- O: Open / Closed Principle
- L: LiskovSubstitution Principle
- I: Interface Segregation Principle
- D: Dependency Inversion Principle

### Member of class

- properties - свойства на клас - използват се за съхранение на данни
  `protected name: string`
- methods -Методите са функции в класа, които определят поведения и действия.
  Всеки метод трябва да прави една конкретна задача.
- конструктур - Конструкторът е специален метод, който се извиква автоматично при създаване на обект.
  Задачата му е да инициализира свойствата.

- Аксесоари - in order to use accessors your compoler output should be set to ES6 or higher. Използват се за контролирано четене и записване на свойства.
  Работят като методи, но се използват като свойства.

  - Get метод
  - Set метод

- Access Modifiers (Types):

  - Private
  - Protected
  - Public
    (By default they are Public)

- Additional Modifiers

  - static - принадлежи на класа, а не на неговите инстанции
  - abstract - използва се само да дефинира структурана, но не може да се инстанцира, не му се дава имплементация
  - read only - не може да се модифицира пропъртитото другаде освен в конструктора

  Редът на подредба е :

  - (Acess Modifier)
  - abstract or static
  - readonly

```ts
abstract class Machine {
  protected abstract readonly model: string; public static readonly machineCount: number; static abstract id: string; //Error: has both static and abstract }
```
