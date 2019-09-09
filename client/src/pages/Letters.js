import React from 'react';
// Import context and provider
import { MyContext } from '../Context';

export default function Letters() {
  return (
    <MyContext.Consumer>
      {(context) => (
        <div className="Letters">
          {
            (() => {
              if (context.state.language === 'en') {
                return (
                  <div>
                    Letters
                  </div>
                ) 
              } else {
                return (
                  <div>
                    Lettres
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
