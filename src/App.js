import LandingPage from './pages/LandingPage';
import Header from './components/Header';
import Footer from './components/Footer';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';




function App() {
  return (
    <div className="App">
      <Header />

      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </Router>

    <Footer />
    </div>
  );
}

export default App;
