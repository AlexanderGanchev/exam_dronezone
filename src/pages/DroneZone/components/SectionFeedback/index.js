import types from 'prop-types';
import React from 'react';

// Components

import { CustomSlider } from '../../../../components/CustomSlider';
import { FeedbackCard } from './components/FeedbackCard';

// Data

import { feedback } from './data';

// Styles

import './styles.scss';

// ----------------

export const SectionFeedback = () => {
  const cardClickHandler = (id) => {
    console.log('card-id -->', id);
  };
  // Render

  return (
    <div className="feedback" id="feedback">
      <div className="feedback__content">
        <div className="feedback__healine">Feedback On The Job</div>

        <CustomSlider className="feedback__slider">
          {feedback.map((item) => {
            return (
              <FeedbackCard
                handleClick={cardClickHandler}
                className="feedback__card"
                avatar={item.avatar}
                author={item.author}
                date={item.date}
                country={item.country}
                description={item.description}
                id={item.id}
              />
            );
          })}
        </CustomSlider>
      </div>
    </div>
  );
};

// ----------------

// Type of props

SectionFeedback.propTypes = {
  prop: types.string,
};

// Default value for props

SectionFeedback.defaultProps = {};
