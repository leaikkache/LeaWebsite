import React from 'react';
// Import context and provider
import { MyContext } from '../Context';

export default function Manifesto() {
  return (
    <MyContext.Consumer>
      {(context) => (
        <div className="Manifesto">
          {
            (() => {
              if (context.state.language === 'en') {
                return (
                  <div>
                    Manifesto
                  </div>
                ) 
              } else {
                return (
                  <div>
                    Manifeste
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
