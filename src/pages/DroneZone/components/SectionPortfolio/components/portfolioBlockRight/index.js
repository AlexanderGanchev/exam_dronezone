import types from 'prop-types';
import React from 'react';

// Components

import VideoCard from '../../../../../../components/VideoCard';
import { SectionTitle } from '../../../../../../components/SectionTitle';
import { Button } from '../../../../../../components/Button';

// Styles

import './styles.scss';

// ----------------

export const PortfolioBlockRight = ({ className }) => {
  return (
    <div className={`portfolio-block ${className}`}>
      <div className="portfolio-block__info--right">
        <SectionTitle
          title="Nature From The Air"
          subtitle="Pellentesque eget nunc sit amet urna ullamcorper fermentum et eu leo. Nunc vel nibh tempor, pharetra lectus congue, luctus orci nec ultricies sem efficitur quis. Integer bibendum eget metus ac accumsan."
        />
        <Button title="Ask For Price" />
      </div>
      <div className="portfolio-block__video--right">
        <VideoCard url="https://www.youtube.com/watch?v=Qrq1HD90hiU&t=6s" />
      </div>
    </div>
  );
};

// ----------------

// Type of props

PortfolioBlockRight.propTypes = {
  prop: types.string,
};

// Default value for props

PortfolioBlockRight.defaultProps = {};
