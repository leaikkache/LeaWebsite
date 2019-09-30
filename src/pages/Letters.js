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
                  <img src="https://farm9.staticflickr.com/8461/8048823381_0fbc2d8efb.jpg" alt="" />
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
                  <img src="https://farm5.staticflickr.com/4144/5053682635_b348b24698.jpg" alt="" />
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
                  <img src="https://farm3.staticflickr.com/2827/10384422264_d9c7299146.jpg" alt="" />
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
                  <img src="https://farm7.staticflickr.com/6217/6216951796_e50778255c.jpg" alt="" />
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
