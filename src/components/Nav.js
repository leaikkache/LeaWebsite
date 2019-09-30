import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {withRouter} from 'react-router';
import '../stylesheets/Nav.css';

class Nav extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      circularOpen: false,
      french: true,
      hamburgerMenu: false
    }
    this.toggleCircularMenu = this.toggleCircularMenu.bind(this);
    this.toggleLanguage = this.toggleLanguage.bind(this);
    this.toggleHamburgerMenu = this.toggleHamburgerMenu.bind(this)
  }

  toggleCircularMenu() {
    this.setState({circularOpen: !this.state.circularOpen});
  }

  toggleLanguage() {
    this.setState({french: !this.state.french})
  }

  toggleHamburgerMenu () {
    this.setState({hamburgerMenu: !this.state.hamburgerMenu})
  }

  render() {

    return (
      <nav>
        <div className="nav-languages">
          <img onClick={this.props.context.changeLanguage} data-language="fr"src="images/fr.png" alt="french language icon"/> 
          <img onClick={this.props.context.changeLanguage} data-language="en" src="images/en.png" alt="english language icon"/>
        </div>
        <div className="logo">
          <Link className="link" to="/">
            <img src="images/logo.png" alt=""/>
          </Link>
        </div>
        <span style={{fontSize:"30px", cursor:"pointer"}} 
        className={this.state.hamburgerMenu ? "hamburger-menu open" : "hamburger-menu"} 
        onClick={this.toggleHamburgerMenu}>
          &#9776;
        </span>
        <div className={this.state.hamburgerMenu ? "overlay-menu overlay-menu-open" : "overlay-menu"} >
          <div className="closebtn" onClick={this.toggleHamburgerMenu}>
            &times;
          </div>
          <div class="overlay-content">
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <div onClick={this.toggleCircularMenu} className={this.state.circularOpen ? 'circular-menu top-right open' : 'circular-menu top-right'}>         
          <Link className="link disc l0 rotate" to="/partenaires">
            {
              (() => {
                if (this.props.context.state.language === 'en') {
                  return <div>Partners</div>
                } else {
                  return <div>Partenaires</div>
                }
              })()
            }
          </Link>
          <Link className="link disc l1 rotate" to="/lettres">
            {
              (() => {
                if (this.props.context.state.language === 'en') {
                  return <div>Letters</div>
                } else {
                  return <div>Lettres</div>
                }
              })()
            }
          </Link>
          <Link className="link disc l2 rotate" to="/résumés">
            {
              (() => {
                if (this.props.context.state.language === 'en') {
                  return <div>Summaries</div>
                } else {
                  return <div>Résumés</div>
                }
              })()
            }
          </Link>
          <Link className="link disc l3 rotate" to="/manifeste">
            {
              (() => {
                if (this.props.context.state.language === 'en') {
                  return <div>Manifesto</div>
                } else {
                  return <div>Manifeste</div>
                }
              })()
            }
          </Link>
          <Link className="link disc l4 rotate" to="/projets">
            {
              (() => {
                if (this.props.context.state.language === 'en') {
                  return <div>Bio/Projects</div>
                } else {
                  return <div>Bio/Projets</div>
                }
              })()
            }
          </Link>
          {
            this.state.open?
            <Link className="link disc l5 toggle">
              {
                (() => {
                  if (this.props.context.state.language === 'en') {
                    return <div>Close</div>
                  } else {
                    return <div>Fermer</div>
                  }
                })()
              }
            </Link>
            :
            <Link className="link disc l5 toggle">
              {
                (() => {
                  if (this.props.context.state.language === 'en') {
                    return <div>Menu</div>
                  } else {
                    return <div>Menu</div>
                  }
                })()
              }
            </Link>
          }
        </div>
      </nav>
    )
  }
}

export default withRouter(Nav)