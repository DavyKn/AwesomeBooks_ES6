import Book from './module/books.js';
import { bookForm, books } from './module/intro.js';
import { DateTime } from './module/luxon.js';

books.forEach(Book.createBook);
bookForm.onsubmit = (e) => {
  e.preventDefault();
  const newBook = Book.addBook(new Book(bookForm.title.value, bookForm.author.value));
  Book.createBook(newBook);

  bookForm.title.value = '';
  bookForm.author.value = '';
    
};

const addNewAuthorLink = document.querySelector('.form-link');
const listLink = document.querySelector('.list-link');
const contactLink = document.querySelector('.contact-link');
const addNewAuthor = document.getElementById('form');
const list = document.getElementById('list');
const contact = document.getElementById('contact');

const date = DateTime.now();
const time = date.toLocaleString(DateTime.DATETIME_MED);
// eslint-disable-next-line no-unused-vars ,no-multi-assign
const dateItem = document.querySelector('.date').innerHTML = time;

listLink.addEventListener('click', () => {
  addNewAuthor.style.display = 'none';
  contact.style.display = 'none';
  list.style.display = 'block';
});

addNewAuthorLink.addEventListener('click', () => {
  list.style.display = 'none';
  contact.style.display = 'none';
  addNewAuthor.style.display = 'block';
});

contactLink.addEventListener('click', () => {
  list.style.display = 'none';
  addNewAuthor.style.display = 'none';
  contact.style.display = 'flex';
});