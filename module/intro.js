const bookForm = document.querySelector('.book-form');

const bookContainer = document.querySelector('.book-container');

const books = JSON.parse(localStorage.getItem('books')) || [];

export { bookForm, bookContainer, books };