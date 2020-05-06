import React, { Component } from 'react';
import Slider from 'react-slick';
import types from 'prop-types';

// Styles

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.scss';

// ----------------

class CustomSlider extends Component {
  // Type of props

  static propTypes = {
    prop: types.string,
  };

  // Default value for props

  static defaultProps = {};

  render() {
    const { children, className } = this.props;

    const defaultSettings = {
      dots: true,
      centerMode: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            arrows: false,
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 1,
          },
        },
      ],
    };

    return (
      <Slider {...defaultSettings} className={`slider ${className}`}>
        {children}
      </Slider>
    );
  }
}

export { CustomSlider };
