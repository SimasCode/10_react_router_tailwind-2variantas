import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function SingleBookPage() {
  const params = useParams();
  console.log('params ===', params);

  const [currentBook, setCurrentBook] = useState({});

  useEffect(() => {
    (async () => {
      const resp = await axios.get('/db/books.json');
      console.log('resp ===', resp);
      const bookData = resp.data;
      console.log('bookData ===', bookData);
      // surasti knygos objekta kurio id yra lygus params.bookId
      const found = bookData.find(
        (bObj) => bObj.id.toString() === params.bookId,
      );
      console.log('found ===', found);
      setCurrentBook(found);
    })();
  }, [params.bookId]);

  return (
    <div className="container">
      <Link to={'/books'} className="text-lg">
        Go back
      </Link>
      <div className="border border-slate-500 p-8 shadow-md">
        <h1 className="text-3xl font-bold underline pb-4">
          Title: {currentBook.title} ({params.bookId})
        </h1>
        <p className="text-lg text-gray-600">by: {currentBook.author}</p>
        <p className="text-2xl">Year: {currentBook.year}</p>
        <h3>
          Genre: <strong>{currentBook.genre}</strong>
        </h3>
      </div>
    </div>
  );
}
