import React from 'react';

// Components

import { Header } from './components/Header';
import { SectionHero } from './components/SectionHero';
import { SectionAbout } from './components/SectionAbout';
import { SectionDrones } from './components/SectionDrones';
import { SectionPortfolio } from './components/SectionPortfolio';
import { SectionFeedback } from './components/SectionFeedback';
import { SectionEmail } from './components/SectionEmail';
import { SectionMap } from './components/SectionMap';
import { Footer } from './components/Footer';
import { ButtonUp } from './../../components/ButtonUp';

// Styles

import './styles.scss';

// --------------------

export const DroneZone = () => {
  return (
    <div className="landing">
      <Header />
      <SectionHero />
      <SectionAbout />
      <SectionDrones />
      <SectionPortfolio />
      <SectionFeedback />
      <SectionEmail />
      <SectionMap />
      <Footer />

      <div className="landing__button-up-wrapper">
        <ButtonUp />
      </div>
    </div>
  );
};
