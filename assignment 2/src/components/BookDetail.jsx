const { Link: DetailLink, useParams } = ReactRouterDOM;
const bookDetailElement = React.createElement;

function BookDetail({ books }) {
  const { id } = useParams();
  const selectedBook = books.find((book) => book.id === id);

  if (!selectedBook) {
    return bookDetailElement(
      "section",
      { className: "page-section" },
      bookDetailElement(
        DetailLink,
        { className: "detail-back", to: "/" },
        "Back to book list"
      ),
      bookDetailElement(
        "div",
        { className: "detail-empty" },
        bookDetailElement("h2", null, "Book not found"),
        bookDetailElement(
          "p",
          null,
          "The selected book could not be found in the catalog."
        )
      )
    );
  }

  return bookDetailElement(
    "section",
    { className: "page-section" },
    bookDetailElement(
      DetailLink,
      { className: "detail-back", to: "/" },
      "Back to book list"
    ),
    bookDetailElement(
      "article",
      { className: "detail-card" },
      selectedBook.imageUrl
        ? bookDetailElement("img", {
            className: "detail-cover",
            src: selectedBook.imageUrl,
            alt: `${selectedBook.title} cover`,
          })
        : bookDetailElement(
            "div",
            { className: "detail-cover-placeholder" },
            "No image available"
          ),
      bookDetailElement(
        "div",
        { className: "detail-copy" },
        bookDetailElement("p", { className: "detail-label" }, "Book Details"),
        bookDetailElement("h1", null, selectedBook.title),
        bookDetailElement(
          "p",
          { className: "detail-author" },
          `by ${selectedBook.author}`
        ),
        bookDetailElement(
          "p",
          { className: "detail-description" },
          selectedBook.description
        )
      )
    )
  );
}

window.BookDetail = BookDetail;
