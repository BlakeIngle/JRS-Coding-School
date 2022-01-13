import React, { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import './books.css'
import BookCard from './BookCard'
import { Context } from '../App'

export default function HomePage() {

    var { http, state } = useContext(Context);
    const [books, setBooks] = useState([]);

    function getAllBooks() {
        http.getAllBooks()
            .then(res => {
                console.log(res.data.books)
                setBooks(res.data.books);
            })
            .catch(err => {
                console.error(err)
            });
    }

    useEffect(() => {
        getAllBooks();
    }, [])

    return (
        <div>
            <h1>Books Books Books</h1>
            <nav>
                <Link to="login">
                    <button type="button" className="login-button">Login</button>
                </Link>
                <Link to="user/foo">
                    <button type="button" className="login-button">
                        <FontAwesomeIcon icon={faUserCircle} />
                    </button>
                </Link>
            </nav>

            <div className="books-container">
                {books.map(book => <BookCard key={book.id}
                    isFav={state.user?.favoriteBook?.id == book.id}
                    {...book} />)}
            </div>
        </div>
    )
}
