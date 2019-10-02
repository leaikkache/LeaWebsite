import React from 'react';
// Import context and provider
import { MyContext } from '../Context';
import "../stylesheets/Headline.css"

export default function Partners() {
  return (
    <MyContext.Consumer>
      {(context) => (
        <div className="Partners">
          {
            (() => {
              if (context.state.language === 'en') {
                return (
                  <h1 className="headline">
                    Partners
                  </h1>
                ) 
              } else {
                return (
                  <h1 className="headline">
                    Partenaires
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
