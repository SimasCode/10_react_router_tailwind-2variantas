import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import Header from './components/layout/Header';
import { Routes, Route } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';
// import BooksPage from './pages/BooksPage';
import SingleBookPage from './pages/SingleBookPage';
import BookPageWithSearch from './pages/BookPageWithSearch';
import AddBookPage from './pages/AddBookPage';

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/books" element={<BookPageWithSearch />} />
        <Route path="/books/:bookId" element={<SingleBookPage />} />
        <Route path="/add-book" element={<AddBookPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
