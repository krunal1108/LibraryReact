import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks, deleteBook } from '../redux/booksSlice';
import './BookList.css';

const BookList = () => {
  const dispatch = useDispatch();
  const { books, status } = useSelector((state) => state.books);



  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);


  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  if (status === 'loading') {
    return <p>Loading!!!</p>;
  }

  return (
    <div className="book-list">
      <h1>Library Books</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id} className="book-item">
            {book.title} by {book.author} ({book.genre}, {book.year})
            <button onClick={() => handleDelete(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
