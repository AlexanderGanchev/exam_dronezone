import classNames from 'classnames';
import types from 'prop-types';
import React, { useState } from 'react';

// Components

import { ContentContainer } from '../../../../components/ContentContainer';
import { Navbar } from './components/Navbar';
import { Logo } from './../../../../components/Logo';

import useCurrentPosition from '../../../../hooks/useCurrentPosition';

// Static
import { navigationLinks } from './data';

// Styles

import './styles.scss';
import AsideDrawer from './components/AsideDrawer';
import HamburgerButton from './components/HamburgerButton';

// ----------------

export const Header = () => {
  const [isAsideOpen, toggleAside] = useState(false);

  const currentPosition = useCurrentPosition();

  const handleToggleAside = () => {
    toggleAside(!isAsideOpen);
  };

  // Modify styles

  const modify = classNames({
    ' header--on-scroll': currentPosition >= 1,
  });

  // Render

  return (
    <div className={`header${modify}`}>
      <ContentContainer>
        <div className="header__content">
          <Logo className="header__logo" />
          <Navbar activeItem="Contact" links={navigationLinks} />
          <HamburgerButton
            handleClick={handleToggleAside}
            className="header__menu-btn-wrapper"
            isOpen={isAsideOpen}
          />
          <AsideDrawer isOpen={isAsideOpen} links={navigationLinks} />
        </div>
      </ContentContainer>
    </div>
  );
};

// ----------------

// Type of props

Header.propTypes = {
  prop: types.string,
};

// Default value for props

Header.defaultProps = {};
