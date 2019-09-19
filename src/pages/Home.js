import React, { Component } from 'react';
// Import context and provider
import { MyContext } from '../Context';
import "../stylesheets/Home.css";

export default class Home extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {(context) => (
          <div className="Home">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F9B470" fill-opacity="1" d="M0,192L0,96L51.4,96L51.4,96L102.9,96L102.9,256L154.3,256L154.3,96L205.7,96L205.7,256L257.1,256L257.1,224L308.6,224L308.6,32L360,32L360,256L411.4,256L411.4,160L462.9,160L462.9,224L514.3,224L514.3,256L565.7,256L565.7,128L617.1,128L617.1,160L668.6,160L668.6,32L720,32L720,96L771.4,96L771.4,224L822.9,224L822.9,192L874.3,192L874.3,160L925.7,160L925.7,128L977.1,128L977.1,32L1028.6,32L1028.6,0L1080,0L1080,96L1131.4,96L1131.4,96L1182.9,96L1182.9,128L1234.3,128L1234.3,192L1285.7,192L1285.7,192L1337.1,192L1337.1,96L1388.6,96L1388.6,256L1440,256L1440,0L1388.6,0L1388.6,0L1337.1,0L1337.1,0L1285.7,0L1285.7,0L1234.3,0L1234.3,0L1182.9,0L1182.9,0L1131.4,0L1131.4,0L1080,0L1080,0L1028.6,0L1028.6,0L977.1,0L977.1,0L925.7,0L925.7,0L874.3,0L874.3,0L822.9,0L822.9,0L771.4,0L771.4,0L720,0L720,0L668.6,0L668.6,0L617.1,0L617.1,0L565.7,0L565.7,0L514.3,0L514.3,0L462.9,0L462.9,0L411.4,0L411.4,0L360,0L360,0L308.6,0L308.6,0L257.1,0L257.1,0L205.7,0L205.7,0L154.3,0L154.3,0L102.9,0L102.9,0L51.4,0L51.4,0L0,0L0,0Z"></path></svg>            {
              (() => {
                if (context.state.language === 'en') {
                  return (
                    <div className="intro-section">
                      <div className="about-section">
                        <p className="headline">Hi,</p> 
                        <p className="main-sentence">My name is <strong className="bold">Lea Ikkache</strong>, I’m an engineer, musician and campaigner for sustainable development and equality.</p> 
                        <p>After giving it a lot of thought and discovering many amazing persons and projects, I’m pursuing what I believe to be the most impactful path : that of <span className="bold">education</span>, <span className="bold">training</span> and <span className="bold">writing</span>.</p>
                        <p>I offer training in <span className="bold">entrepreneurship</span>, <span className="bold">sustainability</span> and <span className="bold">coding</span> for individuals and organizations.</p>
                      </div>
                      {/* <img src="images/portrait.jpg" alt=""/> */}
                    </div>
                  ) 
                } else {
                  return (
                    <div className="intro-section">
                      <div className="about-section">
                        <p className="headline">Bonjour,</p> 
                        <p className="main-sentence">Je suis <strong className="bold">Léa Ikkache</strong>, ingénieure, musicienne, militante pour le développement durable et l’égalité.</p>
                        <p>Après une longue réflexion et de nombreuses découvertes de personnes et de projets inspirants, je me lance dans la voie qui me semble avoir le meilleur ratio énergie dépensée / impact positif : celle de <span className="bold">l’éducation</span>, de la <span className="bold">formation</span> et de <span className="bold">l’écriture</span>.</p>
                        <p>Je propose des formations en <span className="bold">entrepreunariat</span>, en <span className="bold">développement durable</span>, et en <span className="bold">programmation</span> pour les particuliers et les organisations.</p> 
                      </div>
                      {/* <img src="images/portrait.jpg" alt=""/> */}
                    </div>
                  )
                }
              })()
            }
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F9B470" fill-opacity="1" d="M0,192L0,32L43.6,32L43.6,320L87.3,320L87.3,288L130.9,288L130.9,224L174.5,224L174.5,320L218.2,320L218.2,224L261.8,224L261.8,288L305.5,288L305.5,96L349.1,96L349.1,192L392.7,192L392.7,160L436.4,160L436.4,224L480,224L480,256L523.6,256L523.6,160L567.3,160L567.3,160L610.9,160L610.9,32L654.5,32L654.5,192L698.2,192L698.2,224L741.8,224L741.8,256L785.5,256L785.5,160L829.1,160L829.1,64L872.7,64L872.7,160L916.4,160L916.4,32L960,32L960,96L1003.6,96L1003.6,288L1047.3,288L1047.3,288L1090.9,288L1090.9,160L1134.5,160L1134.5,64L1178.2,64L1178.2,288L1221.8,288L1221.8,256L1265.5,256L1265.5,288L1309.1,288L1309.1,96L1352.7,96L1352.7,320L1396.4,320L1396.4,160L1440,160L1440,320L1396.4,320L1396.4,320L1352.7,320L1352.7,320L1309.1,320L1309.1,320L1265.5,320L1265.5,320L1221.8,320L1221.8,320L1178.2,320L1178.2,320L1134.5,320L1134.5,320L1090.9,320L1090.9,320L1047.3,320L1047.3,320L1003.6,320L1003.6,320L960,320L960,320L916.4,320L916.4,320L872.7,320L872.7,320L829.1,320L829.1,320L785.5,320L785.5,320L741.8,320L741.8,320L698.2,320L698.2,320L654.5,320L654.5,320L610.9,320L610.9,320L567.3,320L567.3,320L523.6,320L523.6,320L480,320L480,320L436.4,320L436.4,320L392.7,320L392.7,320L349.1,320L349.1,320L305.5,320L305.5,320L261.8,320L261.8,320L218.2,320L218.2,320L174.5,320L174.5,320L130.9,320L130.9,320L87.3,320L87.3,320L43.6,320L43.6,320L0,320L0,320Z"></path></svg> */}
            {
              (() => {
                if (context.state.language === 'en') {
                  return (
                    <div className="goals-section-container">
                      <div className="goals-section">
                        <p className="headline">This website might be valuable to you if ...</p>
                        <ul>
                          <li>
                            <img src="images/lost.svg" alt=""/>
                            <p>You’d like to get involved in sustainability or equality, but you’re not sure about how to get started</p> 
                          </li>
                          <li>
                            <img src="images/value.svg" alt=""/>
                            <p>You are calling your work into question, you want it to be more fulfilling and impactful</p>
                          </li>
                          <li>
                            <img src="images/green-earth.svg" alt=""/>
                            <p>You are looking for ways to convince people that sustainability and equality are relevant</p>
                          </li>
                          <li>
                            <img src="images/lightbulb.svg" alt=""/>
                            <p>You are curious about these subjects</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  ) 
                } else {
                  return (
                    <div className="goals-section-container">
                      <div className="goals-section">
                        <p className="headline">Ce site est fait pour vous si ...</p>
                        <ul>
                          <li>
                            <img src="images/lost.svg" alt=""/>
                            <p>Vous êtes intéressé.e par les sujets du développement durable, du développement personnel et de l’entrepreunariat, mais vous ne savez pas par où commencer</p> 
                          </li>
                          <li>
                            <img src="images/value.svg" alt=""/>
                            <p>Vous vous questionnez sur votre travail, vous voudriez qu’il produise plus de valeur ou ait un impact plus positif</p>
                          </li>
                          <li>
                            <img src="images/green-earth.svg" alt=""/>
                            <p>Vous souhaitez compléter votre discours pour convaincre de l’utilité développement durable et de l’égalité</p>
                          </li>
                          <li>
                            <img src="images/lightbulb.svg" alt=""/>
                            <p>Vous êtes curieux de ces sujets</p>
                          </li>
                        </ul>
                      </div>
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
}
