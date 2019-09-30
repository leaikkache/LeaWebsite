import React from 'react';
// Import context and provider
import { MyContext } from '../Context';
import '../stylesheets/Headline.css';
import "../stylesheets/Manifesto.css";

export default function Manifesto() {
  return (
    <MyContext.Consumer>
      {(context) => (
        <div className="Manifesto">
          {
            (() => {
              if (context.state.language === 'en') {
                return (
                  <h1 className="headline">
                    Manifesto
                  </h1>
                ) 
              } else {
                return (
                  <h1 className="headline">
                    Manifeste
                  </h1>
                )
              }
            })()
          }
          <section>
            {
              (() => {
                if (context.state.language === 'en') {
                  return (
                    <h2>Under construction ...</h2>
                  ) 
                } else {
                  return (
                    <h2>En construction ...</h2>
                  )
                }
              })()
            }
            <img src="images/coming.svg" alt=""/>
          </section>
        </div>
      )}
    </MyContext.Consumer>
  )
}
