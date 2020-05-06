import types from 'prop-types';
import React from 'react';

// Styles

import './styles.scss';

// ----------------

export const FeedbackCard = ({
  handleClick,
  description,
  className,
  avatar,
  author,
  date,
  country,
}) => {
  // Render

  return (
    <div className="feedback-card">
      <div className="feedback-card__heading">
        <div className="feedback-card__avatar-wrapper">
          <div
            className="feedback-card__avatar"
            style={{ backgroundImage: `url(${avatar})` }}
          ></div>
        </div>

        <div className="feedback-card__data">
          <div className="author feedback-card__author">{author}</div>
          <div className="date feedback-card__date">{date}</div>
          <div className="feedback-card__country">{country}</div>
        </div>
      </div>

      <div className="feedback-card__description">{description}</div>
    </div>
  );
};

// ----------------

// Type of props

FeedbackCard.propTypes = {
  prop: types.string,
};

// Default value for props

FeedbackCard.defaultProps = {};
