import classNames from 'classnames';
import React, { Fragment } from 'react';
import { Link } from 'react-scroll';

// Styles

import './styles.scss';

// ----------------

const AsideDrawer = ({ links, isOpen, isClose }) => {
  const modify = classNames({
    'aside--is-open': isOpen,
    'aside--is-close': isClose,
  });

  // Render

  return (
    <aside className={`aside ${modify}`}>
      {links.map((link, id) => {
        return (
          <Fragment key={id}>
            <Link
              className="aside__item"
              activeClass="aside__item--active"
              to={link.to}
              spy={true}
              smooth={true}
              offset={-86}
              duration={500}
              isDynamic={true}
            >
              <div className="aside__item-indicator">{link.label}</div>
            </Link>
          </Fragment>
        );
      })}
    </aside>
  );
};

export default AsideDrawer;
