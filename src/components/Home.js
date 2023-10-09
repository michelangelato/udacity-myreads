import { Link } from "react-router-dom";
import Header from "./Header";
import Shelf from "./Shelf";

const Home = ({ books, updateMyBooks }) => {
	/**
	 * @description Get the list of shelves based on owned books
	 * @param {array} books
	 */
	const getShelves = (books) => [...new Set(books.map((book) => book.shelf))];

	/**
	 * @description handle the shelf change
	 * @param {object} newBook
	 */
	const onUpdateHome = (newBook) => {
		// update app books list after shelf change
		updateMyBooks(newBook);
	};

	return (
		<div className="list-books">
			<Header />
			<div className="list-books-content">
				<div>
					{getShelves(books).map((shelf) => (
						<Shelf
							key={shelf}
							shelf={shelf}
							books={books}
							updateHome={onUpdateHome}
						/>
					))}
				</div>
			</div>
			<div className="open-search">
				<Link to="/search">Add a book</Link>
			</div>
		</div>
	);
};

export default Home;
