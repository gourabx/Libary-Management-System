import React from 'react';
import books from './books';

function BookList() {
  return (
    <div>
      <h2>Library Book List</h2>
      <div>
        {books.map((book, index) => (
          <div key={index}>
            <h4>{book.name}</h4>
            <p>By: {book.writer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookList;




