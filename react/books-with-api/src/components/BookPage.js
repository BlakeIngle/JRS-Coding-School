import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Context } from '../App';
import BookCard from './BookCard';

export default function BookPage() {

    const { http } = useContext(Context);
    const { bookId } = useParams();
    const navigate = useNavigate();

    const [book, setBook] = useState({});
    const [lists, setLists] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    function getAllListsBookAppearsIn() {
        http.getAllListsBookIsInByBookId(bookId)
            .then(res => {
                console.log(res);
                setLists(res.data.lists);
            }).catch(err => {
                console.error(err.response);
            }).then(() => {
                setIsLoading(false);
            });
    }

    function getBook() {
        http.getBookById(bookId)
            .then(res => {
                console.log(res.data.book)
                setBook(res.data.book);
            }).catch(err => {
                console.error(err.response)
                if (err.response.status == 404) {
                    navigate(`/404`);
                }
            })
    }

    useEffect(() => {
        getBook();
        getAllListsBookAppearsIn();
    }, []);

    return (
        <div>
            <h1>{book.title}</h1>

            <BookCard {...book} />

            {(!isLoading && lists.length > 0) && (
                <>
                    <h4>Appears In:</h4>
                    <ul>
                        {lists.map(list => (
                            <li key={list.id}>
                                <Link to={`/list/${list.id}`}>{list.name}</Link>
                            </li>
                        ))}
                    </ul>
                </>
            )}
            {(!isLoading && lists.length == 0) && <h4>
                Not found in any lists.</h4>}
        </div>
    )
}
