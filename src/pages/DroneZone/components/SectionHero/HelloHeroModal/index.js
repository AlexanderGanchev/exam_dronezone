import types from 'prop-types';
import React from 'react';

import { Modal } from '../../../../../components/Modal';
import VideoCard from '../../../../../components/VideoCard';

// Styles

import './styles.scss';

// ----------------

export const HelloHeroModal = ({ isOpen, onClose }) => {
  // Render

  return (
    <div className="modal">
      <Modal isOpen={isOpen} onClose={onClose}>
        <div className="modal__modal-video">
          <VideoCard url="https://www.youtube.com/watch?v=Toon9VARRIU" />
        </div>
      </Modal>
    </div>
  );
};

// ----------------

// Type of props

HelloHeroModal.propTypes = {
  prop: types.string,
};

// Default value for props

HelloHeroModal.defaultProps = {};
