import types from 'prop-types';
import React, { Fragment } from 'react';
import { Link } from 'react-scroll';

// Styles

import './styles.scss';

// ----------------

export function Navbar(props) {
  // Render

  return (
    <div className="navbar">
      {props.links.map((link, id) => {
        return (
          <Fragment key={id}>
            <Link
              className="navbar__item"
              activeClass="navbar__item--active"
              to={link.to}
              spy={true}
              smooth={true}
              offset={-86}
              duration={500}
              isDynamic={true}
            >
              <div className="navbar__item-indicator"></div>
              {link.label}
            </Link>
          </Fragment>
        );
      })}
    </div>
  );
}

// ----------------

// Type of props

Navbar.propTypes = {
  prop: types.string,
};

// Default value for props

Navbar.defaultProps = {};
