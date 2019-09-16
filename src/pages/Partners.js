import React from 'react';
// Import context and provider
import { MyContext } from '../Context';

export default function Partners() {
  return (
    <MyContext.Consumer>
      {(context) => (
        <div className="Partners">
          {
            (() => {
              if (context.state.language === 'en') {
                return (
                  <div>
                    Partners
                  </div>
                ) 
              } else {
                return (
                  <div>
                    Partenaires
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
