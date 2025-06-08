class Book {
  static count = 0;
  constructor(title, author) {
    Book.count++;
    this.title = title;
    this.author = author;
  }

  describe() {
    console.log(
      `Book: ${this.title.toUpperCase()} by ${this.author.toUpperCase()}`
    );
  }

  static getCount() {
    return Book.count;
  }
}

class LibraryBook extends Book {
  constructor(libraryName, title, author) {
    super();
    this.libraryName = libraryName;
    super.title = title;
    super.author = author;
  }

  LibraryDescribe() {
    super.describe();
    console.log(`Available at ${this.libraryName} library.`);
  }
}

let author = new LibraryBook("lib1", "Game of Thrones", "Goerge Martin");
let author2 = new LibraryBook("lib2", "Game of Thrones", "Goerge Martin");
let author3 = new LibraryBook("lib3", "Game of Thrones", "Goerge Martin");
let author4 = new LibraryBook("lib4", "Game of Thrones", "Goerge Martin");
author.describe();
console.log(Book.getCount());

author.LibraryDescribe();
author2.LibraryDescribe();
author3.LibraryDescribe();
author4.LibraryDescribe();
