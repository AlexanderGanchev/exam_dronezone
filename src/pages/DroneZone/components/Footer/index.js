import types from 'prop-types';
import React from 'react';

// Components

import { ContentContainer } from '../../../../components/ContentContainer';
import { SocialBlock } from './components/SocialBlock';
import { Logo } from './../../../../components/Logo';

import { socialLinks } from './data';

// Styles

import './styles.scss';

// ----------------

export const Footer = () => {
  return (
    <div className="footer">
      <ContentContainer>
        <Logo />
        <div className="footer__footer-subtitle">Film your event with us</div>
        <SocialBlock links={socialLinks} />
      </ContentContainer>
    </div>
  );
};

// ----------------

// Type of props

Footer.propTypes = {
  prop: types.string,
};

// Default value for props

Footer.defaultProps = {};
