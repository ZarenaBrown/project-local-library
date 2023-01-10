function findAccountById(accounts, id) {
  // It returns the account object that has the matching ID.
  let findId = accounts.find((account) => account.id === id);
  return findId;
}


function sortAccountsByLastName(accounts) {
// It returns a sorted array of the provided account objects. The objects are sorted alphabetically by last name.
  accounts.sort((accountA, accountB) => (accountA.name.last > accountB.name.last ? 1 : -1));
  return accounts;
}

  // It returns a _number_ that represents the number of times the account's ID appears in any book's `borrows` array.
function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc, book) => {
    const countPerBook = book.borrows.reduce((accBorrow, borrow) => {
      return borrow.id === account.id ? accBorrow + 1 : accBorrow
    }, 0)
    return acc + countPerBook;
  }, 0)
}

  // It returns an array of book objects, including author information, that represents all books _currently checked out_ by the given account. _Look carefully at the object below,_ as it's not just the book object; the author object is nested inside of it.
function getBooksPossessedByAccount(account, books, authors) {
  let finalResult = [];
  let checkedBooks = [];
  books.forEach((item) => {
    const borrowed = item.borrows;
    const book = {
      id: item.id,
      title: item.title,
      genre: item.genre,
      authorId: item.authorId,
      author: {},
      borrows: {}
    };
   const { id, title, genre, authorId, author, borrows } = book;
    
   borrowed.forEach((borrow) => {
     if(borrow.id === account.id && borrow.returned === false) {
       finalResult.push(book);
       checkedBooks.push(borrow);
       books.borrows = checkedBooks;
       book.author = authors.filter((auth) => auth.id === book.authorId)[0];
     }
   });
  });
  return finalResult;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};



























