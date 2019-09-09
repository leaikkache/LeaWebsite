import React, { Component } from 'react';
// Import context and provider
import { MyContext } from '../Context';

export default class Home extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {(context) => (
          <div className="Home">
            {
              (() => {
                if (context.state.language === 'en') {
                  return (
                    <div>
                      Hi
                      My name is Lea, I’m an engineer, musician and campaigner for sustainable development and equality. After giving it a lot of thought and discovering many amazing persons and projects, I’m pursuing what I believe to be the most impactful path : that of education, training and writing. I offer training in entrepreneurship, sustainability and coding for individuals and organizations.
                      This website might be valuable to you if:
                        - you’d like to get involved in sustainability or equality, but you’re not sure about how to get started
                        - you are calling your work into question, you want it to be more fulfilling and impactful
                        - you are looking for ways to convince people that sustainability and equality are relevant
                        - you are curious about these subjects
                    </div>
                  ) 
                } else {
                  return (
                    <div>
                      Bonjour,
                      Je suis Léa Ikkache, ingénieure, musicienne, militante pour le développement durable et l’égalité. Après une longue réflexion et de nombreuses découvertes de personnes et de projets inspirants, je me lance dans la voie qui me semble avoir le meilleur ratio énergie dépensée / impact positif : celle de l’éducation, de la formation et de l’écriture. Je propose des formations en entreprenariat, en développement durable, et en programmation pour les particuliers et les organisations.
                      Ce site est fait pour vous si :
                          - vous êtes intéressé.e par les sujets du développement durable, du développement personnel et de l’entreprenariat, mais vous ne savez pas par où commencer
                          - vous vous questionnez sur votre travail, vous voudriez qu’il produise plus de valeur ou ait un impact plus positif
                          - vous souhaitez compléter votre discours pour convaincre de l’utilité développement durable et de l’égalité
                          - vous êtes curieux de ces sujets
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
