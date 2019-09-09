import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {withRouter} from 'react-router';

class Nav extends Component {
  render() {
    return (
      <nav className="Nav">
        <div>
          <Link to="/">
            Home
          </Link>
        </div>
        <div>
          <Link to="/projets">
            Bio/Projets
          </Link>
        </div>
        <div>
          <Link to="/manifeste">
            Manifeste
          </Link>
        </div>
        <div>
          <Link to="/résumés">
            Résumés
          </Link>
        </div>
        <div>
          <Link to="/lettres">
            Lettres
          </Link>
        </div>
        <div>
          <Link to="/prestations">
            Prestations
          </Link>
        </div>
        <div>
          <Link to="/partenaires">
            Partenaires
          </Link>
        </div>
      </nav>
    )
  }
}

export default withRouter(Nav)