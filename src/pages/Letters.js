import React from 'react';
// Import context and provider
import { MyContext } from '../Context';
import "../stylesheets/Letters.css"

export default function Letters() {
  return (
    <MyContext.Consumer>
      {(context) => (
        <div className="Letters">
          {
            (() => {
              if (context.state.language === 'en') {
                return (
                  <h1 className="headline">
                    Letters
                  </h1>
                ) 
              } else {
                return (
                  <h1 className="headline">
                    Lettres
                  </h1>
                )
              }
            })()
          }

          <ul id="hexGrid">
            <li class="hex">
              <div class="hexIn">
                <a class="hexLink" href="#">
                  <img src="images/pain.jpeg" alt="" />
                  {
                    (() => {
                      if (context.state.language === 'en') {
                        return (
                          <>
                            <h1>English title</h1>
                            <p>English summary</p>
                          </>
                        ) 
                      } else {
                        return (
                          <>
                            <h1>Essai sur la souffrance</h1>
                            <p>Un résumé</p>
                          </>
                        )
                      }
                    })()
                  }
                </a>
              </div>
            </li>
            <li class="hex">
              <div class="hexIn">
                <a class="hexLink" href="#">
                  <img src="images/sustainable.jpg" alt="" />
                  {
                    (() => {
                      if (context.state.language === 'en') {
                        return (
                          <>
                            <h1>English title</h1>
                            <p>English summary</p>
                          </>
                        ) 
                      } else {
                        return (
                          <>
                            <h1>Comprendre le développement durable</h1>
                            <p>Un résumé</p>
                          </>
                        )
                      }
                    })()
                  }
                </a>
              </div>
            </li>
            <li class="hex">
              <div class="hexIn">
                <a class="hexLink" href="#">
                  <img src="images/path.jpg" alt="" />
                  {
                    (() => {
                      if (context.state.language === 'en') {
                        return (
                          <>
                            <h1>English title</h1>
                            <p>English summary</p>
                          </>
                        ) 
                      } else {
                        return (
                          <>
                            <h1>Par où commencer</h1>
                            <p>Un résumé</p>
                          </>
                        )
                      }
                    })()
                  }
                </a>
              </div>
            </li>
            <li class="hex">
              <div class="hexIn">
                <a class="hexLink" href="#">
                  <img src="images/feminism.png" alt="" />
                  {
                    (() => {
                      if (context.state.language === 'en') {
                        return (
                          <>
                            <h1>English title</h1>
                            <p>English summary</p>
                          </>
                        ) 
                      } else {
                        return (
                          <>
                            <h1>Petit guide de féministe débutant.e</h1>
                            <p>Un résumé</p>
                          </>
                        )
                      }
                    })()
                  }
                </a>
              </div>
            </li>
          </ul>

        </div>
      )}
    </MyContext.Consumer>
  )
}
