import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

import Banner from "./layouts/banner/Banner"
import Nav from "./layouts/nav/Nav"

const App = () => {
  return (
    <>
      <Banner />
      <Nav />
    </>
  );
}

export default App;
