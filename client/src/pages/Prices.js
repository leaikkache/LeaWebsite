import React from 'react';
// Import context and provider
import { MyContext } from '../Context';

export default function Prices() {
  return (
    <MyContext.Consumer>
      {(context) => (
        <div className="Prices">
          {
            (() => {
              if (context.state.language === 'en') {
                return (
                  <div>
                    Prices
                  </div>
                ) 
              } else {
                return (
                  <div>
                    Prestations
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
