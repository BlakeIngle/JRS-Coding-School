import React, { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import './books.css'
import BookCard from './BookCard'
import { Context } from '../App'
import { useAxios } from '../services/axios.service'

export default function HomePage() {

    var { state } = useContext(Context);
    const [books, setBooks] = useState([]);
    const http = useAxios();

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
    }, []);

    return (
        <div>
            <h1>Books Books Books</h1>
            <nav>
                {state.user ?
                    <Link to={`/user/${state.user.id}`}>
                        <button type="button" className="login-button">
                            <FontAwesomeIcon icon={faUserCircle} />
                        </button>
                    </Link>
                    :
                    <Link to="login">
                        <button type="button" className="login-button">Login</button>
                    </Link>
                }
            </nav>

            <div className="books-container">
                {books.map(book => <BookCard key={book.id}
                    isFav={state.user?.favoriteBook?.id == book.id}
                    {...book} />)}
            </div>
        </div>
    )
}
