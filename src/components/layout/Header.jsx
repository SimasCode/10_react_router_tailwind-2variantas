import { NavLink } from 'react-router-dom';
export default function Header() {
  return (
    <header className="mb-4  ">
      <div className="container flex justify-between">
        <a href="" className="text-lg ">
          React<span className="font-bold">Router</span>
        </a>
        <nav>
          <NavLink
            to="/"
            className="border hover:bg-slate-500 border-black  px-3 py-1"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="border hover:bg-slate-200 border-black  px-3 py-1"
          >
            About
          </NavLink>
          <NavLink
            to="/books"
            className="border hover:bg-slate-200 border-black  px-3 py-1"
          >
            Books
          </NavLink>
          <NavLink
            to="/add-book"
            className="border hover:bg-slate-200 border-black  px-3 py-1"
          >
            Create Book
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
