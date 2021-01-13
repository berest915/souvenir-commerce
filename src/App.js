import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

import Banner from "./layouts/banner/Banner"
import Nav from "./layouts/nav/Nav"
import About from "./pages/about/About"
import Products from "./pages/products/Products"
import NotFound from "./pages/not-found/NotFound"

const App = () => {
  return (
    <>
  <Router >
      <Banner />
      <Nav />
      <Switch>
        <Route exact path='/' component={Products} />
        <Route exact path='/products' component={Products} />
        <Route exact path='/about' component={About} />
        <Route component={NotFound} />
      </Switch>
      </Router>
    </>
  );
}

export default App;
