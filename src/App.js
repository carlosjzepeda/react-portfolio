import "./App.scss";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Contact from "./pages/Contact";
import Slides from "./pages/Slides";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Footer />
        <Route exact path='/' component={Landing} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/work' component={Slides} />
      </Router>
    </>
  );
};

export default App;
