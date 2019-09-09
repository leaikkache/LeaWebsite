import React from 'react';
// Import context and provider
import { MyContext } from '../Context';
import '../stylesheets/Projects.css'

export default function Projects() {
  return (
    <MyContext.Consumer>
      {(context) => (
        <div className="Projects">
          {
            (() => {
              if (context.state.language === 'en') {
                return (
                  <div>
                    <h1>Projects</h1>
                  </div>
                ) 
              } else {
                return (
                  <div>
                    <h1>Projets</h1>
                  </div>
                )
              }
            })()
          }

          {/* consider the hexagons as several lines, adjust the lines and not the hexagons themselves */}

          <div className="hexagons-container">
            <div className="hexagon"></div>
            <div className="hexagon"></div>
            <div className="hexagon"></div>
            <div className="hexagon"></div>
            <div className="hexagon"></div>
            <div className="hexagon"></div>
            <div className="hexagon"></div>
          </div>
          
        </div>        

      )}
    </MyContext.Consumer>
  )
}
