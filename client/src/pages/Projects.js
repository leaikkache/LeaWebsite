import React from 'react';
// Import context and provider
import { MyContext } from '../Context';

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
                    Projects
                  </div>
                ) 
              } else {
                return (
                  <div>
                    Projets
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
