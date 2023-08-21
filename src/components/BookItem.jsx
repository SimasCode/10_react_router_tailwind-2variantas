import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; // ES6

function BookItem(props) {
  return (
    <li>
      <Link className="" to={`/books/${props.id}`}>
        <span>{props.title}</span> - <strong>category: </strong>
        {props.category}
      </Link>
    </li>
  );
}
// aprasom duomenu tipus ir reikalinguma su proptypes
BookItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired,
  ]),
  category: PropTypes.string.isRequired,
};

export default BookItem;
