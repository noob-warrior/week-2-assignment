const { Link, useNavigate } = ReactRouterDOM;
const bookListElement = React.createElement;

function BookList({ books }) {
  const navigate = useNavigate();

  return bookListElement(
    "section",
    { className: "page-section" },
    bookListElement(
      "header",
      { className: "page-header" },
      bookListElement("h1", null, "Book Explorer"),
      bookListElement(
        "p",
        null,
        "Browse the small catalog below and click any title to open the full book details page."
      )
    ),
    bookListElement(
      "div",
      { className: "book-grid" },
      books.map((book) =>
        bookListElement(
          "article",
          { className: "book-card", key: book.id },
          book.imageUrl
            ? bookListElement("img", {
                className: "book-thumb",
                src: book.imageUrl,
                alt: `${book.title} cover`,
              })
            : bookListElement(
                "div",
                { className: "thumb-placeholder" },
                "NO COVER"
              ),
          bookListElement(
            "div",
            { className: "book-copy" },
            bookListElement(
              "h2",
              null,
              bookListElement(
                Link,
                { className: "card-link", to: `/books/${book.id}` },
                book.title
              )
            ),
            bookListElement(
              "p",
              { className: "card-author" },
              `by ${book.author}`
            ),
            bookListElement(
              "p",
              { className: "card-summary" },
              book.shortDescription
            ),
            bookListElement(
              "button",
              {
                type: "button",
                className: "card-button",
                onClick: () => navigate(`/books/${book.id}`),
              },
              "Read More"
            )
          )
        )
      )
    )
  );
}

window.BookList = BookList;
