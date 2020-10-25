import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Anamenu from './component/AnaMenu';
import Hakkimizda from './component/Hakkimizda';
import Blog from './component/Blog';
import BlogArticle from './component/BlogArticle';

function App() {
  var pat = window.location.pathname;
  var state = true;

  return (
    <Router>
      <div className='App'>
        <div className='contain'>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Anamenu} />
            <Route path='/hakkimizda' exact component={Hakkimizda} />
            <Route path='/blog' exact component={Blog} />
            <Route path='/blog/:id' component={BlogArticle} />
          </Switch>
        </div>
        <Footer styl={state} />
      </div >
    </Router>
  );
}

export default App;