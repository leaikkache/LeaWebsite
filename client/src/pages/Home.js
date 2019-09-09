import React, { Component } from 'react';
import Layout from '../layout/Layout.js';

export default class Home extends Component {
  render() {
    return (
      <Layout>
        <div>
        Bonjour,
        Je suis Léa Ikkache, ingénieure, musicienne, militante pour le développement durable et l’égalité. Après une longue réflexion et de nombreuses découvertes de personnes et de projets inspirants, je me lance dans la voie qui me semble avoir le meilleur ratio énergie dépensée / impact positif : celle de l’éducation, de la formation et de l’écriture. Je propose des formations en entreprenariat, en développement durable, et en programmation pour les particuliers et les organisations.
        Ce site est fait pour vous si :
            - vous êtes intéressé.e par les sujets du développement durable, du développement personnel et de l’entreprenariat, mais vous ne savez pas par où commencer
            - vous vous questionnez sur votre travail, vous voudriez qu’il produise plus de valeur ou ait un impact plus positif
            - vous souhaitez compléter votre discours pour convaincre de l’utilité développement durable et de l’égalité
            - vous êtes curieux de ces sujets
        </div>
      </Layout>
    )
  }
}
