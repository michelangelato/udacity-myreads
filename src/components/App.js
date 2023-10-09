import "../css/App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./Home.js";
import Search from "./Search";
import * as BooksAPI from "../utils/BooksAPI";

function App() {
	// the books the user own
	const [books, setBooks] = useState([]);

	/**
	 * @description Load Books from API into state
	 */
	const loadMyBooks = async () => {
		const res = await BooksAPI.getAll();
		setBooks(res);
	};

	/**
	 * @description Load Books on component mounting
	 */
	useEffect(() => {
		loadMyBooks();
	}, []);

	/**
	 * @description Handles book addition or deletion
	 * @param {object} newBook
	 */
	const onUpdateMyBooks = (newBook) => {
		// get the list of owned books except the one that is updated
		const booksExceptUpdated = books.filter((b) => b.id !== newBook.id);

		// check if the new book's shelf is set to "none"
		if (newBook.shelf === "none") {
			// the book is deleted from list
			setBooks([...booksExceptUpdated]);
		} else {
			// the book is added or changed
			setBooks([...booksExceptUpdated, newBook]);
		}
	};

	return (
		<div className="app">
			<Routes>
				<Route
					path="/search"
					element={<Search books={books} updateMyBooks={onUpdateMyBooks} />}
				/>
				<Route
					exact
					path="/"
					element={<Home books={books} updateMyBooks={onUpdateMyBooks} />}
				/>
			</Routes>
		</div>
	);
}

export default App;
