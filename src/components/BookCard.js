import BookChanger from "./BookChanger";
import BookDetails from "./BookDetails";
import * as BooksAPI from "../utils/BooksAPI";
import { useState } from "react";

const BookCard = ({ book, updateList }) => {
	// tell if book details are showed
	const [bookShowed, setBookShowed] = useState(false);

	/**
	 * @description Get book cover image
	 * @param {object} book
	 */
	const getImage = (book) => {
		return {
			width: 128,
			height: 193,
			backgroundImage:
				'url("' + (book.imageLinks && book.imageLinks.thumbnail) + '")',
		};
	};

	/**
	 * @description Get a string from authors array
	 * @param {object} book
	 */
	const getAuthors = (book) => (book.authors ? book.authors.toString() : "");

	/**
	 * @description Show the modal with book details
	 */
	const showDetails = () => {
		setBookShowed(true);
	};

	/**
	 * @description Handle the closing of the modal
	 */
	const onCloseModal = () => {
		setBookShowed(false);
	};

	/**
	 * @description handle book shelf change
	 * @param {string} newShelf
	 */
	const onUpdateBook = (newShelf) => {
		// change the shelf of the book
		book.shelf = newShelf;

		// update database using API
		BooksAPI.update(book, newShelf);

		if (updateList) {
			// update the list of books
			updateList(book);
		}
	};

	return (
		<div className="book">
			<div className="book-top">
				<div
					className="book-cover"
					style={getImage(book)}
					onClick={showDetails}
				></div>
				<BookChanger
					shelf={book.shelf ? book.shelf : "none"}
					updateBook={onUpdateBook}
				/>
			</div>
			<div className="book-title">{book.title}</div>
			<div className="book-authors">{getAuthors(book)}</div>
			<BookDetails
				book={book}
				bookShowed={bookShowed}
				closeModal={onCloseModal}
			/>
		</div>
	);
};

export default BookCard;
