import "./App.scss";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Route exact path='/' component={Landing} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/work' component={Work} />
      </Router>
    </>
  );
};

export default App;
