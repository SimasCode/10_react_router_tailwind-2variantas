import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';

export default function AddBookPage() {
  const [isFormDone, setIsFormDone] = useState(false);

  const formik = useFormik({
    initialValues: {
      title: '',
      author: '',
      year: '',
      genre: '',
      category: '',
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .max(10, 'Must be 10 character or less')
        .required('Required'),
      author: Yup.string()
        .max(10, 'Must be 10 character or less')
        .required('Required'),
      year: Yup.string()
        .min(4, 'More than 4 symbols')
        .max(4, 'Must be 4 character or less')
        .required('Required'),
      genre: Yup.string()
        .max(10, 'Must be 10 character or less')
        .required('Required'),
      category: Yup.string()
        .oneOf(['Fantasy', 'Fiction', 'Reality'], 'Invalid category selected')
        .required('Required'),
    }),
    onSubmit: (values) => {
      console.log('values ===', values);
      setIsFormDone(true);
    },
  });

  console.log('errors', formik.errors);
  console.log('formik.values', formik.values);
  return (
    <div className="container">
      <h1 className="text-3xl font-bold underline pb-4">
        Add book {isFormDone.toString()}
      </h1>

      {!isFormDone && (
        <form
          onSubmit={formik.handleSubmit}
          className="grid gap-2 justify-start"
        >
          <div>
            <input
              onChange={formik.handleChange}
              value={formik.values.title}
              onBlur={formik.handleBlur}
              id="title"
              className="block py-1 px-2 border border-slate-500 "
              type="text"
              placeholder="title"
            />
            {formik.touched.title && formik.errors.title ? (
              <p className="text-red-500">{formik.errors.title}</p>
            ) : null}
          </div>

          <div>
            <input
              onChange={formik.handleChange}
              value={formik.values.author}
              onBlur={formik.handleBlur}
              id="author"
              className="block py-1 px-2 border border-slate-500"
              type="text"
              placeholder="author"
            />
            {formik.touched.author && formik.errors.author ? (
              <p className="text-red-500">{formik.errors.author}</p>
            ) : null}
          </div>

          <div>
            <input
              onChange={formik.handleChange}
              value={formik.values.year}
              onBlur={formik.handleBlur}
              id="year"
              className="block py-1 px-2 border border-slate-500 "
              type="text"
              placeholder="year"
            />
            {formik.touched.year && formik.errors.year ? (
              <p className="text-red-500">{formik.errors.year}</p>
            ) : null}
          </div>

          <div>
            <input
              onChange={formik.handleChange}
              value={formik.values.genre}
              onBlur={formik.handleBlur}
              id="genre"
              className="block py-1 px-2 border border-slate-500 "
              type="text"
              placeholder="genre"
            />
            {formik.touched.genre && formik.errors.genre ? (
              <p className="text-red-500">{formik.errors.genre}</p>
            ) : null}
          </div>

          <div>
            <select
              onChange={formik.handleChange}
              value={formik.values.category}
              id="category"
              className="block py-1 px-2 border border-slate-500"
              name="category"
            >
              <option value="" disabled>
                Choose here
              </option>
              <option value="Fantasy">Fantasy</option>
              <option value="Fiction">Fiction</option>
              <option value="Reality">Reality</option>
            </select>
          </div>
          <button className="border border-slate-500" type="submit">
            Create
          </button>
        </form>
      )}
      {isFormDone && (
        <div>
          <h2 className="text-blue-600 font-bold text-lg">
            Jūs sėkmingai pridėjote knygą !!!{' '}
          </h2>
        </div>
      )}
    </div>
  );
}
