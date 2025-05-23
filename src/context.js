import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const URL = "https://openlibrary.org/search.json?title=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState("The Lost World");
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [resultTitle, setResultTitle] = useState("");

    const FetchBooks = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(`${URL}${searchTerm}`);
            const data = await response.json();
            console.log(data);
            const { docs } = data;

            if (docs) {
                const newBooks = docs.slice(0, 20).map((bookSingle) => {
                    const { key, author_name, cover_i, edition_count, first_publish_year, title } = bookSingle;
                    return {
                        id: key,
                        author: author_name,
                        cover_id: cover_i,
                        edition_count: edition_count,
                        first_publish_year: first_publish_year,
                        title: title
                    }
                });
                setBooks(newBooks);

                if (newBooks.length > 1) {
                    setResultTitle("Your search results");
                } else {
                    setResultTitle("No results found!");
                }
            } else {
                setBooks([]);
                setResultTitle("No results found!");
            }
            setLoading(false);


        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }, [searchTerm]);

    useEffect(() => {
        FetchBooks();
    }, [searchTerm, FetchBooks]);

    return (
        <AppContext.Provider value={{ searchTerm, setSearchTerm, books, loading, resultTitle }}>
            {children}
        </AppContext.Provider>
    );
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };