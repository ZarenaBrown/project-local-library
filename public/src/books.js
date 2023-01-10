function findAuthorById(authors, id) {
  // It returns the author object that has the matching ID.
  let authorFind = authors.find((author) => author.id === id);
  return authorFind;
}

function findBookById(books, id) {
  // It returns the book object that has the matching ID.
  let found = books.find((book) => book.id === id);
  return found;
}


  // The first array contains book objects that represent the books _that are currently checked out_, while the second array contains book objects that represent the books _that have been returned._ You can check for the return status by looking at the first transaction object in the `borrows` array.
function partitionBooksByBorrowedStatus(books) {
  let returnedBooks = books.filter((book) => 
book.borrows.every((borrow) => borrow.returned === true));
  
  let checkedBooks = books.filter((book) => book.borrows.some((borrow) => borrow.returned === false));
  
  let finalResult = [[...checkedBooks], [...returnedBooks]];
  return finalResult;
}


  // It should return an array of ten or fewer account objects that represents the accounts given by the IDs in the provided book's `borrows` array. However, each account object should include the `returned` entry from the corresponding transaction object in the `borrows` array.
function findAccountById(accounts, id){
   return accounts.find(account => account.id === id);
}

function getBorrowersForBook(book, accounts) {
  return book.borrows.map((borrow) => {
    let account = findAccountById(accounts, borrow.id);
    return {...borrow, ...account};
  }) .slice(0,10);
}



module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};




























