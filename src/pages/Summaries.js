import React from 'react';
// Import context and provider
import { MyContext } from '../Context';
import "../stylesheets/Headline.css"
  
export default function Summaries() {
  return (
    <MyContext.Consumer>
      {(context) => (
        <div className="Summaries">
          {
            (() => {
              if (context.state.language === 'en') {
                return (
                  <h1 className="headline">
                    Summaries
                  </h1>
                ) 
              } else {
                return (
                  <h1 className="headline">
                    Résumés
                  </h1>
                )
              }
            })()
          }
        </div>
      )}
    </MyContext.Consumer>
  )
}
