const BookChanger = ({ shelf, updateBook }) => {
	/**
	 * @description Handle shelf changing of a book
	 * @param {object} event
	 */
	const handleChange = (event) => {
		const chosedShelf = event.target.value;
		if (chosedShelf && chosedShelf !== shelf) {
			// update the book
			updateBook(chosedShelf);
		}
	};

	/**
	 * @description get the classes for changer element based on position on the shelf
	 * @param {string} shelf
	 */
	const getClass = (shelf) =>
		"book-shelf-changer" + (shelf === "none" ? "" : " active");

	return (
		<div className={getClass(shelf)}>
			<select onChange={handleChange} defaultValue={shelf}>
				<option value="move" disabled>
					Move to...
				</option>
				<option
					value="currentlyReading"
					defaultValue={shelf === "currentlyReading"}
				>
					Currently Reading
				</option>
				<option value="wantToRead">Want to Read</option>
				<option value="read">Read</option>
				<option value="none">None</option>
			</select>
		</div>
	);
};

export default BookChanger;
