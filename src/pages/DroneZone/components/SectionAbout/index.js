import types from 'prop-types';
import React from 'react';

// Components

import { ContentContainer } from '../../../../components/ContentContainer';
import { aboutItem } from './data';

// Styles

import './styles.scss';
import { AboutList } from './components/aboutList';
import { Button } from '../../../../components/Button';

// ----------------

export const SectionAbout = () => {
  return (
    <div className="about">
      <ContentContainer maxWidth="1345">
        <AboutList item={aboutItem} />
        <div className="about__button-about">
          <Button title="Ask for price" />
        </div>
      </ContentContainer>
    </div>
  );
};

// ----------------

// Type of props

SectionAbout.propTypes = {
  prop: types.string,
};

// Default value for props

SectionAbout.defaultProps = {};
