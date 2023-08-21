import axios from 'axios';
import { useEffect, useState } from 'react';
import BookItem from '../components/BookItem';

export default function BookPageWithSearch() {
  const [mainBooksArr, setMainBooksArr] = useState([]);
  const [searchVal, setSearchVal] = useState('');

  function handleSearchInput(event) {
    setSearchVal(event.target.value);
  }

  // atfiltruoti mainBooksArr title su searchVal
  const filtered = mainBooksArr.filter((bObj) =>
    bObj.title.includes(searchVal),
  );

  console.table(filtered);
  useEffect(() => {
    axios
      .get('/db/books.json')
      .then((resp) => {
        console.log('resp.data ===', resp.data);
        setMainBooksArr(resp.data);
      })
      .catch((error) => {
        console.warn('ivyko klaida:', error);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="text-3xl font-bold underline pb-4">Books page</h1>
      <p>See alll the books we have</p>

      <fieldset className="border border-slate-500 p-4 flex gap-4">
        <legend>Filter books</legend>
        <input
          onChange={handleSearchInput}
          value={searchVal}
          className="border border-slate-400 px-3 py-1 rounded-sm"
          type="search"
          placeholder="search in title"
        />
      </fieldset>

      <h2 className="text-2xl font font-medium mb-2">Pick a book</h2>
      <ul>
        {/* sukti cikla per bookData ir sugeneruoti nuorodas su title */}
        {filtered.map((bObj) => (
          <BookItem
            key={bObj.id}
            title={bObj.title}
            id={bObj.id}
            category={bObj.category}
          />
        ))}
      </ul>
    </div>
  );
}
