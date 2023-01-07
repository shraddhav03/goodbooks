import "./styles.css";
import React, { useState } from "react";

const bookDB = {
  kidsbooks: [
    { name: "Think Again", author: "Adam Grant" },
    { name: "Gerinimo Stilton", author: "elisabetra Dami" },
    { name: "Harry Potter", author: "J.K.Rowlling" }
  ],
  fiction: [
    { name: "The Inheritance of Loss", author: "Kiran Desai" },
    { name: "A Suitable Boy", author: "Vikram Desai" }
  ],
  business: [
    { name: "Think and Grow Rich", author: "Napoleon Hill" },
    { name: "The Lean StartUp", author: "Eric Ries" }
  ]
};
export default function App() {
  const [selectedGenre, setGenre] = useState("business");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>📚 goodbooks</h1>
      <p>Checkout my favourite books. Select a genre to get started...</p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              padding: "0.5rem 1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem",
              borderRadius: "0.5rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>

      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                liststyle: "none",
                padding: "1rem",
                border: "1px solid gray",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontsize: "larger" }}>{book.name}</div>
              <div style={{ fontsize: "smaller" }}>by:{book.author}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
