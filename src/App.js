import "./App.css";
import { BrowserRouter, Switch, Route, Router } from "react-router-dom";
import Home from "../src/pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainPage from "./components/MainPage";
import AddEditForm from "./pages/AddEditForm";
import history from "./components/history";

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto bg-blue-400">
        <ToastContainer />

        <div className="font-mono bg-purple-50 min-h-screen ">
          <Switch>
            <Router history={history}>
              <MainPage />
              <Route exact path="/" component={Home} />
              <Route exact path="/add/schedule/" component={AddEditForm} />
              <Route exact path="/details/:id" component={AddEditForm} />
            </Router>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
