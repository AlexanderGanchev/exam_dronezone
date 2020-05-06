import types from 'prop-types';
import React, { useState } from 'react';

// Components

import { ContentContainer } from '../../../../components/ContentContainer';
import { Button } from '../../../../components/Button';
import buttonIcon from './../../../../assets/icons/play.svg';
import { HelloHeroModal } from './HelloHeroModal';
import { ButtonDown } from './../../../../components/ButtonDown';
import buttonDown from './../../../../assets/icons/down.svg';

// Styles

import './styles.scss';

// ----------------

export const SectionHero = () => {
  const [modalIsOpen, toggleModal] = useState(false);

  const toggleModalHandler = () => {
    toggleModal(!modalIsOpen);

    console.log('111');
  };

  return (
    <>
      <div className="hero">
        <ContentContainer>
          <div className="hero__hero-content">
            <p className="hero-content__hero-title">Film your event with us!</p>
            <p className="hero-content__hero-sub-title">
              Pellentesque eget nunc sit amet urna ullamcorper fermentum et eu
              leo. Nunc vel nibh tempor, pharetra lectus congue, luctus orci.
            </p>
            <div className="hero__button-wrapper">
              <Button buttonColor="transparent" title="Ask for price" />
              <Button
                toggleModalHandler={() => toggleModalHandler()}
                buttonColor="transparent"
                title="Watch video"
                buttonIcon={buttonIcon}
              />
            </div>
            <ButtonDown buttonDown={buttonDown} />
          </div>
        </ContentContainer>
      </div>
      <HelloHeroModal isOpen={modalIsOpen} onClose={toggleModalHandler} />
    </>
  );
};

// ----------------
// Type of props

SectionHero.propTypes = {
  prop: types.string,
};

// Default value for props

SectionHero.defaultProps = {};
