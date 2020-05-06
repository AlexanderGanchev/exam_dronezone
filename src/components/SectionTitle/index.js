import classNames from 'classnames';
import types from 'prop-types';
import React from 'react';

// Styles

import './styles.scss';

// ----------------

export const SectionTitle = ({ className, subtitle, align, color, title }) => {
  // Modify styles

  const modify = classNames({
    [` section-title--align-${align}`]: align,
    [` section-title--color-${color}`]: color,
  });

  // Render

  return (
    <div className={`section-title ${className}${modify}`}>
      <p className="section-title__title">{title}</p>
      <p className="section-title__subtitle">{subtitle}</p>
    </div>
  );
};

// ----------------

// Type of props

SectionTitle.propTypes = {
  subtitle: types.string,
  title: types.string.isRequired,
  align: types.oneOf(['left', 'center', 'right']),
  color: types.oneOf(['primary', 'secondary']),
};

// Default value for props

SectionTitle.defaultProps = {
  color: 'primary',
  align: 'left',
};
