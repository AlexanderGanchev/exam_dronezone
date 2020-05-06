import types from 'prop-types';
import React from 'react';

// Components

import { ContentContainer } from '../../../../components/ContentContainer';
import { Button } from './../../../../components/Button';

// Styles

import './styles.scss';

// ----------------

export const SectionEmail = () => {
  return (
    <div className="email">
      <ContentContainer>
        <div className="email__wrapper">
          <div className="email__title">Sign Up For Our Newsletter</div>
          <div className="email__email-send">
            <div className="email__input-wrapper">
              <input className="email__input" placeholder="Email address" />
            </div>
            <Button buttonColor="secondblue" title="Send" />
          </div>
        </div>
      </ContentContainer>
    </div>
  );
};

// ----------------

// Type of props

SectionEmail.propTypes = {
  prop: types.string,
};

// Default value for props

SectionEmail.defaultProps = {};
