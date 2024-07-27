import React from 'react';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ProductList} />
        <Route path="/product/:productId" component={ProductDetail} />
      </Switch>
    </Router>
  );
}

export default App;
