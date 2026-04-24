const { Route, Routes } = ReactRouterDOM;
const appElement = React.createElement;

function App() {
  const books = window.bookCatalog;
  const BookListComponent = window.BookList;
  const BookDetailComponent = window.BookDetail;

  return appElement(
    "main",
    { className: "app-shell" },
    appElement(
      Routes,
      null,
      appElement(Route, {
        path: "/",
        element: appElement(BookListComponent, { books }),
      }),
      appElement(Route, {
        path: "/books/:id",
        element: appElement(BookDetailComponent, { books }),
      })
    )
  );
}

window.App = App;
