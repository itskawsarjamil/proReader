import { useLoaderData } from "react-router-dom";
import Book from "./Book";

const Books = () => {
    const data = useLoaderData();
    const BooksData = data.books;
    return (
        <div className="bg-gray-100">
            <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
                    <svg
                        viewBox="0 0 88 88"
                        className="w-full max-w-screen-xl text-indigo-100"
                    >
                        <circle fill="currentColor" cx="44" cy="44" r="15.5" />
                        <circle
                            fillOpacity="0.2"
                            fill="currentColor"
                            cx="44"
                            cy="44"
                            r="44"
                        />
                        <circle
                            fillOpacity="0.2"
                            fill="currentColor"
                            cx="44"
                            cy="44"
                            r="37.5"
                        />
                        <circle
                            fillOpacity="0.3"
                            fill="currentColor"
                            cx="44"
                            cy="44"
                            r="29.5"
                        />
                        <circle
                            fillOpacity="0.3"
                            fill="currentColor"
                            cx="44"
                            cy="44"
                            r="22.5"
                        />
                    </svg>
                </div>
                <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                    
                    {
                        BooksData.map((book, idx) => <Book book={book} key={idx}></Book>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Books