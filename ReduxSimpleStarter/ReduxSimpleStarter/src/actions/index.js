export function selectBook(book) {
    console.log('book:', book.title);
    // select book is an actionCreator. needs to return and action
    // an object with a type property
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}