import React from 'react';
// Import context and provider
import { MyContext } from '../Context';
import Timeline from '../components/timeline'
import '../stylesheets/Projects.css';
import '../stylesheets/Headline.css';
import { StyleRoot } from 'radium'

export default function Projects() {
  return (
    <MyContext.Consumer>
      {(context) => (
        <div className="About">
          <div className="Bio">
            {
              (() => {
                if (context.state.language === 'en') {
                  return (
                    <div>
                      <h1 className="headline">About me</h1>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat vero maxime molestias esse magnam labore provident repellendus eos consectetur nemo tempora accusantium veritatis, odit repellat enim aperiam aspernatur minima harum!</p>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat vero maxime molestias esse magnam labore provident repellendus eos consectetur nemo tempora accusantium veritatis, odit repellat enim aperiam aspernatur minima harum!</p>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat vero maxime molestias esse magnam labore provident repellendus eos consectetur nemo tempora accusantium veritatis, odit repellat enim aperiam aspernatur minima harum!</p>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat vero maxime molestias esse magnam labore provident repellendus eos consectetur nemo tempora accusantium veritatis, odit repellat enim aperiam aspernatur minima harum!</p>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat vero maxime molestias esse magnam labore provident repellendus eos consectetur nemo tempora accusantium veritatis, odit repellat enim aperiam aspernatur minima harum!</p>
                    </div>
                  ) 
                } else {
                  return (
                    <div>
                      <h1 className="headline">A propos</h1>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat vero maxime molestias esse magnam labore provident repellendus eos consectetur nemo tempora accusantium veritatis, odit repellat enim aperiam aspernatur minima harum!</p>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat vero maxime molestias esse magnam labore provident repellendus eos consectetur nemo tempora accusantium veritatis, odit repellat enim aperiam aspernatur minima harum!</p>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat vero maxime molestias esse magnam labore provident repellendus eos consectetur nemo tempora accusantium veritatis, odit repellat enim aperiam aspernatur minima harum!</p>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat vero maxime molestias esse magnam labore provident repellendus eos consectetur nemo tempora accusantium veritatis, odit repellat enim aperiam aspernatur minima harum!</p>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat vero maxime molestias esse magnam labore provident repellendus eos consectetur nemo tempora accusantium veritatis, odit repellat enim aperiam aspernatur minima harum!</p>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat vero maxime molestias esse magnam labore provident repellendus eos consectetur nemo tempora accusantium veritatis, odit repellat enim aperiam aspernatur minima harum!</p>
                    </div>
                  )
                }
              })()
            } 
          </div>
          <div className="Projects">
            {
              (() => {
                if (context.state.language === 'en') {
                  return (
                    <div>
                      <h1 className="headline">Projects</h1>
                    </div>
                  ) 
                } else {
                  return (
                    <div>
                      <h1 className="headline">Projets</h1>
                    </div>
                  )
                }
              })()
            }          
            <StyleRoot>
              <Timeline activeColor='#F49370'>
                <div className="project-container">
                  <a href=""><h1>CRoC</h1></a>
                  <img src="images/croc.png" alt=""/>
                </div>
                <div className="project-container">
                  <a href=""><h1>Third arm</h1></a>
                  <img src="images/third_arm.jpg" alt=""/>
                </div>
                <div className="project-container">
                  <a href=""><h1>Earsketch</h1></a>
                  <img src="images/earsketch.png" alt=""/>
                </div>
                <div className="project-container">
                  <a href=""><h1>I-corps</h1></a>
                  <img src="images/icorps.jpg" alt=""/>
                </div>
                <div className="project-container">
                  <a href=""><h1>RemeD</h1></a>
                  <img src="images/remed.png" alt=""/>
                </div>
                <div className="project-container">
                  <a href=""><h1>Women In Music Tech</h1></a>
                  <img src="images/wimt.png" alt=""/>
                </div>
                <div className="project-container">
                  <a href=""><h1>Whale Shark Project</h1></a>
                  <img src="images/wsp.jpg" alt=""/>
                </div>
                <div className="project-container">
                  <a href=""><h1>Spark</h1></a>
                  <img src="images/spark.png" alt=""/>
                </div>
                <div className="project-container">
                  <a href=""><h1>Rentrée de la fresque à CS</h1></a>
                  <img src="images/fresque.jpg" alt=""/>
                </div>
                <div className="project-container">
                  <a href=""><h1>Centre Egalité des Chances</h1></a>
                  <img src="images/cec.jpg" alt=""/>
                </div>
              </Timeline>
            </StyleRoot>
          </div>
        </div>
      )}
    </MyContext.Consumer>
  )
}
