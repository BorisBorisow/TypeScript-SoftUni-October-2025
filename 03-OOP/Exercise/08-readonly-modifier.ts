class Book {
  constructor(readonly title: string, readonly author: string) {}
}

const book = new Book("1984", "George Orwell");
console.log(`${book.title} by ${book.author}`);
// book.title = "Brave New World";
// book.author = "Terry Pratchet";	1984 by George Orwell
// // Error: Cannot assign to 'title' because it is a read-only property
// // Error: Cannot assign to author because it is a read-only property
