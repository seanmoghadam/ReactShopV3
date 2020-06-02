import React from "react";
import PropTypes from "prop-types";

const BookListing = (props) => {
    return <div>
        <h1>Bestseller Bücher 2020</h1>
        <ul className="book-overview-list">
            {
                props.books.map((book, index) => {
                    return <li className="book-overview-list-item" key={book.isbn + index}>
                        <p>
                            {book.title}
                        </p>
                        <button className="cart-button">
                            Zum Warenkorb
                        </button>
                    </li>
                })
            }

        </ul>
    </div>
};

BookListing.propTypes = {
    books: PropTypes.array
};


export default BookListing;
