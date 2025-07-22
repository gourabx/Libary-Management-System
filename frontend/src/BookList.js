import React from 'react';
import books from './books';

function BookList() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Book List</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {books.map((book, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #ccc',
              padding: '10px',
              margin: '10px',
              width: '200px',
              textAlign: 'center'
            }}
          >
            <img src={book.image} alt={book.name} style={{ width: '100px', height: '150px' }} />
            <h4>{book.name}</h4>
            <p>by {book.writer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookList;



