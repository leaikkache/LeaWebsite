import React from 'react';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Manifesto from './pages/Manifesto';
import Summaries from './pages/Summaries';
import Letters from './pages/Letters';
import Prices from './pages/Prices';
import Partners from './pages/Partners';

import {Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home}/> 
      <Route path="/projets" component={Projects}/> 
      <Route path="/manifeste" component={Manifesto}/> 
      <Route path="/résumés" component={Summaries}/> 
      <Route path="/lettres" component={Letters}/> 
      <Route path="/prestations" component={Prices}/> 
      <Route path="/partenaires" component={Partners}/> 
    </div>
  );
}
export default App;