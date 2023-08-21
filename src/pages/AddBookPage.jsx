//
export default function AddBookPage() {
  return (
    <div className="container">
      <h1 className="text-3xl font-bold underline pb-4">Add book</h1>

      <form className="grid gap-2 ">
        <div>
          <input
            className="block py-1 px-2 border border-slate-500 "
            type="text"
            placeholder="title"
          />
        </div>

        <div>
          <input
            className="block py-1 px-2 border border-slate-500"
            type="text"
            placeholder="author"
          />
        </div>

        <div>
          <input
            className="block py-1 px-2 border border-slate-500 "
            type="text"
            placeholder="year"
          />
        </div>

        <div>
          <input
            className="block py-1 px-2 border border-slate-500 "
            type="text"
            placeholder="genre"
          />
        </div>

        <div>
          <select
            className="block py-1 px-2 border border-slate-500"
            name="category"
          >
            <option value="Fantasy">Fantasy</option>
            <option value="Fiction">Fiction</option>
            <option value="Reality">Reality</option>
          </select>
        </div>
        <button className="border border-slate-500" type="submit">
          Create
        </button>
      </form>
    </div>
  );
}
