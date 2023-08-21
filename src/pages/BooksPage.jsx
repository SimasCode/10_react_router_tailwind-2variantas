import axios from 'axios';
import { useEffect, useState } from 'react';
import BookItem from '../components/BookItem';

export default function BooksPage() {
  const [mainBooksArr, setMainBooksArr] = useState([]);
  // filter state 'currentCategory'
  const [currentCategory, setCurrentCategory] = useState(false);
  console.log('currentCategory ===', currentCategory);
  function handleCategory(event) {
    console.log('selected', event.target.checked);
    console.log('selected', event.target.value);
    setCurrentCategory(event.target.checked ? event.target.value : false);
  }

  let filteredBooksArr = mainBooksArr.filter(
    (bObj) => bObj.category === currentCategory,
  );
  console.table(filteredBooksArr);

  if (currentCategory === false) {
    // jei filtras nuimtas tai rodom visas knygas
    filteredBooksArr = mainBooksArr;
  }

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

        <div className="flex gap-2">
          <input
            type="checkbox"
            id="fantasy"
            value="Fantasy"
            onChange={handleCategory}
          />
          <label htmlFor="fantasy">Fantasy</label>
        </div>
        <div className="flex gap-2">
          <input
            type="checkbox"
            value="Fiction"
            id="fiction"
            onChange={handleCategory}
          />
          <label htmlFor="fiction">Fiction</label>
        </div>
        <div className="flex gap-2">
          <input
            type="checkbox"
            id="reality"
            value="Reality"
            onChange={handleCategory}
          />
          <label htmlFor="reality">Reality</label>
        </div>
      </fieldset>
      <h3>current filter: {currentCategory}</h3>

      <h2 className="text-2xl font font-medium mb-2">Pick a book</h2>
      <ul>
        {/* sukti cikla per bookData ir sugeneruoti nuorodas su title */}
        {filteredBooksArr.map((bObj) => (
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
