import BookList from "./BookList";

const Shelf = ({ shelf, books, updateHome }) => {
	// list of books in the shelf
	const booksInShelf = books.filter((book) => book.shelf === shelf);

	/**
	 * @description get readable title from shelf code
	 * @param {string} shelf
	 */
	const getShelfTitle = (shelf) =>
		shelf === "currentlyReading"
			? "Currently Reading"
			: shelf === "wantToRead"
			? "Want to Read"
			: shelf === "read"
			? "Read"
			: "-";

	/**
	 * @description handle shelf update
	 * @param {object} newBook
	 */
	const onUpdateShelf = (newBook) => {
		// update home after shelf change
		updateHome(newBook);
	};

	return (
		<div className="bookshelf">
			<h2 className="bookshelf-title">{getShelfTitle(shelf)}</h2>
			<div className="bookshelf-books">
				<BookList books={booksInShelf} updateShelf={onUpdateShelf} />
			</div>
		</div>
	);
};

export default Shelf;
