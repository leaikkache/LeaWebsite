import React from 'react';
import Nav from './components/Nav';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Manifesto from './pages/Manifesto';
import Summaries from './pages/Summaries';
import Letters from './pages/Letters';
import Prices from './pages/Prices';
import Partners from './pages/Partners';
import { MyContext } from './Context'

import {Route} from "react-router-dom";

function App() {
  return (
    <MyContext.Consumer>
      {(context) => (
        <div className="App">
          <Nav context={context} />
          <Route exact path="/" component={Home}/> 
          <Route path="/projets" component={Projects}/> 
          <Route path="/manifeste" component={Manifesto}/> 
          <Route path="/résumés" component={Summaries}/> 
          <Route path="/lettres" component={Letters}/> 
          <Route path="/prestations" component={Prices}/> 
          <Route path="/partenaires" component={Partners}/> 
        </div>
      )}
    </MyContext.Consumer>
  );
}
export default App;