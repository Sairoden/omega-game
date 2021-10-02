// Components and Pages
import Home from "./pages/Home";
import Nav from "./components/Nav";

// Styles
import GlobalStyles from "./components/GlobalStyles";

// Router
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav></Nav>
      <Route path={["/game/:id", "/"]}>
        <Home></Home>
      </Route>
    </div>
  );
}

export default App;
