import React, { useState, lazy, Suspense } from "react";
import { Router } from "@reach/router";
import SearchParams from "./hooks/SearchParams";
// import ThemeContext from "./ThemeContext";
import { Provider } from "react-redux";
import NavBar from "./hooks/NavBar";
import store from "./Store";
import { render } from "react-dom";

const Details = lazy(() => import("./components/Details"));

const App = () => {
  // const themeHook = useState("purple");
  return (
    <React.StrictMode>
      <Provider store={store}>
        {/* <ThemeContext.Provider value={themeHook}> */}
        <div>
          <NavBar />
          <Suspense fallback={<h1>Loading route...</h1>}>
            <Router>
              <SearchParams path="/" />
              <Details path="/details/:id" />
            </Router>
          </Suspense>
        </div>
        {/* </ThemeContext.Provider> */}
      </Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
// export default App;
