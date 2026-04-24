// render app
const RouterComponent =
  window.location.protocol === "file:"
    ? ReactRouterDOM.HashRouter
    : ReactRouterDOM.BrowserRouter;
const AppComponent = window.App;
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  React.createElement(
    React.StrictMode,
    null,
    React.createElement(
      RouterComponent,
      null,
      React.createElement(AppComponent)
    )
  )
);
