import { useState } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../utils/BooksAPI";
import BookList from "./BookList";

const Search = ({ books, updateMyBooks }) => {
	// contains the searched query of the input text
	const [query, setQuery] = useState("");

	// contains the array of books returned from the query
	const [searchedBooks, setSearchedBooks] = useState([]);

	/**
	 * @description Search books via API based on query and set state,
	 * if the results are empty set state to empty array
	 * @param {string} query
	 */
	const searchBooks = async (query) => {
		if (query && query !== "") {
			// search books from API based on query
			const booksFromAPI = await BooksAPI.search(query, 10);

			// check if the result is an array
			if (Array.isArray(booksFromAPI)) {
				// the API returns a result

				// create a new array with shelf for books that has it
				const booksFromAPIWithShelf = booksFromAPI.map(function (apiBook) {
					const bookFound = books.find((b) => b.id === apiBook.id);
					return bookFound ?? apiBook;
				});

				// set the state with new array
				setSearchedBooks(booksFromAPIWithShelf);
			} else {
				// the API returns error, set searched books to empty
				setSearchedBooks([]);
			}
		} else {
			// the searched query is blank, set searched books to empty
			setSearchedBooks([]);
		}
	};

	/**
	 * @description Handle user typing on search textbox
	 * @param {object} event
	 */
	const handleChange = (event) => {
		// update the state of the query
		setQuery(event.target.value);

		// search books from API based on query
		searchBooks(event.target.value);
	};

	/**
	 * @description Handle shelf changing of a book
	 * @param {object} newBook
	 */
	const onUpdateSearch = (newBook) => {
		// update the list of books
		updateMyBooks(newBook);
	};

	return (
		<div className="search-books">
			<div className="search-books-bar">
				<Link to="/" className="close-search">
					Close
				</Link>
				<div className="search-books-input-wrapper">
					<input
						type="text"
						placeholder="Search by title, author, or ISBN"
						value={query}
						onChange={handleChange}
					/>
				</div>
			</div>
			<div className="search-books-results">
				<BookList books={searchedBooks} updateShelf={onUpdateSearch} />
			</div>
		</div>
	);
};

export default Search;
