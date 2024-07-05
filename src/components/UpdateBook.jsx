import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateBook } from '../redux/booksSlice';
import './UpdateBook.css';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const book = books.find((book) => book.id === Number(id));

  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [genre, setGenre] = useState(book.genre);
  const [year, setYear] = useState(book.year);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedBook = { ...book, title, author, genre, year };
    dispatch(updateBook(updatedBook));
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="update-book-form">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        type="text"
        placeholder="Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />
      <input
        type="number"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <button type="submit">Update Book</button>
    </form>
  );
};

export default UpdateBook;
