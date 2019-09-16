import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {withRouter} from 'react-router';
import '../stylesheets/Nav.css';

class Nav extends Component {
  render() {
    return (
      <nav className="Nav">
        <ul className="nav-list">
          <li>
            <Link className="link" to="/">
              {
                (() => {
                  if (this.props.context.state.language === 'en') {
                    return "Home"
                  } else {
                    return "Menu"
                  }
                })()
              }
            </Link>
          </li>
          <li>
            <Link className="link" to="/projets">
              {
                (() => {
                  if (this.props.context.state.language === 'en') {
                    return "Projects"
                  } else {
                    return "Projets"
                  }
                })()
              }
            </Link>
          </li>
          <li>
            <Link className="link" to="/manifeste">
              {
                (() => {
                  if (this.props.context.state.language === 'en') {
                    return "Manifesto"
                  } else {
                    return "Manifeste"
                  }
                })()
              }
            </Link>
          </li>
          <li>
            <Link className="link" to="/résumés">
              {
                (() => {
                  if (this.props.context.state.language === 'en') {
                    return "Summaries"
                  } else {
                    return "Résumés"
                  }
                })()
              }
            </Link>
          </li>
          <li>
            <Link className="link" to="/lettres">
              {
                (() => {
                  if (this.props.context.state.language === 'en') {
                    return "Letters"
                  } else {
                    return "Lettres"
                  }
                })()
              }
            </Link>
          </li>
          <li>
            <Link className="link" to="/prestations">
              {
                (() => {
                  if (this.props.context.state.language === 'en') {
                    return "Prices"
                  } else {
                    return "Prestations"
                  }
                })()
              }
            </Link>
          </li>
          <li>
            <Link className="link" to="/partenaires">
              {
                (() => {
                  if (this.props.context.state.language === 'en') {
                    return "Partners"
                  } else {
                    return "Partenaires"
                  }
                })()
              }
            </Link>
          </li>
          <li className="nav-languages">
            <span
              onClick={this.props.context.changeLanguage}
              data-language="en"
            >
              EN
            </span>

            <span>/</span>

            <span
              onClick={this.props.context.changeLanguage}
              data-language="fr"
            >
              FR
            </span>
          </li>
        </ul>
      </nav>
    )
  }
}

export default withRouter(Nav)