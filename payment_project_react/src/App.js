
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import Landing from './components/Landing';
import Transaction from './components/Transaction';


function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path = "/transaction" component={Transaction}/>
          </Switch>
        </div>
        <FooterComponent />
      </Router>

    </div>
  );
}

export default App;
