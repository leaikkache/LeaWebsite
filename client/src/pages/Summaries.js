import React from 'react';
// Import context and provider
import { MyContext } from '../Context';
  
export default function Summaries() {
  return (
    <MyContext.Consumer>
      {(context) => (
        <div className="Summaries">
          {
            (() => {
              if (context.state.language === 'en') {
                return (
                  <div>
                    Summaries
                  </div>
                ) 
              } else {
                return (
                  <div>
                    Résumés
                  </div>
                )
              }
            })()
          }
        </div>
      )}
    </MyContext.Consumer>
  )
}
