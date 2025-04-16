import React, { useEffect } from "react";
import { useGlobalContext } from "../../context";
import Book from "../BookList/Book";
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
import "./BookList.css";

const BookList = () => {
    const { books, loading, resultTitle } = useGlobalContext();

    // Scroll to top when books list changes
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [books]);

    const booksWithCovers = books.map((singleBook) => {
        const id = (singleBook.id).replace("/works/", "");
        const cover_img = singleBook.cover_id != null ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg;

        return {
            ...singleBook,
            id,
            cover_img
        };
    });

    if (loading) return <Loading />;

    return (
        <section className="booklist">
            <div className="container">
                <div className="section-title">
                    <h2>{resultTitle}</h2>
                </div>
                <div className="booklist-content grid">
                    {
                        booksWithCovers.slice(0, 30).map((item, index) => {
                            return (
                                <Book key={index} {...item} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default BookList;