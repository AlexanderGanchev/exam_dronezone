import types from 'prop-types';
import React from 'react';

// Components

import { PortfolioBlockLeft } from './components/portfolioBlockLeft';
import { PortfolioBlockRight } from './components/portfolioBlockRight';

// Styles

import './styles.scss';

// ----------------

export const SectionPortfolio = () => {
  return (
    <div className="portfolio">
      <PortfolioBlockLeft className="portfolio-left" />
      <PortfolioBlockRight className="portfolio-right" />
    </div>
  );
};

// ----------------

// Type of props

SectionPortfolio.propTypes = {
  prop: types.string,
};

// Default value for props

SectionPortfolio.defaultProps = {};
