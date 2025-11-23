class User {
  private _username!: string;

  constructor(username: string) {
    this.username = username; // VALIDATION läuft durch setter
  }

  get username(): string {
    return this._username;
  }

  set username(newUsername: string) {
    if (newUsername.length < 3) {
      throw new Error(
        "Error: The new username must be at least 3 characters long."
      );
    }
    this._username = newUsername;
  }
}

const user = new User("Martin");
user.username = "johnDoe";
console.log(user.username);
