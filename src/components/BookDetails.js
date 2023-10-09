const BookDetails = ({ book, bookShowed, closeModal }) => {
	/**
	 * @description handle close of the modal
	 */
	const handleCloseModal = () => {
		closeModal();
	};

	/**
	 * @description Get a string comma separated from array
	 * @param {array} list
	 */
	const displayList = (list) => (list ? list.toString() : "-");

	/**
	 * @description Get a string to display from filed
	 * @param {string} text
	 */
	const displayField = (text) => (text ? text : "-");

	return (
		<div className={bookShowed ? "book-modal show" : "book-modal"}>
			<div className="modal-dialog">
				<div className="modal-content">
					<button
						type="button"
						className="modal-close"
						data-dismiss="modal"
						onClick={handleCloseModal}
					>
						×
					</button>
					<h3>{book.title}</h3>
					<dl>
						<dt className="detail-label">Authors</dt>
						<dd className="detail-value">{displayList(book.authors)}</dd>

						<dt className="detail-label">Categories</dt>
						<dd className="detail-value">{displayList(book.categories)}</dd>

						<dt className="detail-label">Description</dt>
						<dd className="detail-value long-text">
							{displayField(book.description)}
						</dd>

						<dt className="detail-label">Date of Publication</dt>
						<dd className="detail-value">{displayField(book.publishedDate)}</dd>

						<dt className="detail-label">Publisher</dt>
						<dd className="detail-value">{displayField(book.publisher)}</dd>
					</dl>
				</div>
			</div>
		</div>
	);
};

export default BookDetails;
