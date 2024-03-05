import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import Contact from './components/pages/Contact';
import NewEvent from './components/pages/NewEvent';
import Events from './components/pages/Events';
import Home from './components/pages/Home';
import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Container customClass="min-height">
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/events">
            <Events />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/newevent">
            <NewEvent />
          </Route>
        </Container>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
