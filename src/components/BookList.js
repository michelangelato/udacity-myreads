import BookCard from "./BookCard";

const BookList = ({ books, updateShelf }) => {
	/**
	 * @description Handle the shelf change
	 * @param {object} newBook
	 */
	const onUpdateList = (newBook) => {
		// update the shelf after book shelf change
		updateShelf(newBook);
	};

	return (
		<ol className="books-grid">
			{books &&
				books.length > 0 &&
				books.map((book) => (
					<li key={book.id}>
						<BookCard book={book} updateList={onUpdateList} />
					</li>
				))}
		</ol>
	);
};

export default BookList;
