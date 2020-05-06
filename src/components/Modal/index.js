import classNames from 'classnames';
import types from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';

// Styles

import './styles.scss';

// ----------------

export const Modal = ({ children, isOpen, onClose, title }) => {
  // Modify styles

  const modify = classNames({
    ' modal--is-open': isOpen,
  });

  const enhancedClose = e => {
    e.stopPropagation();
    onClose();
  };

  // Render

  return ReactDOM.createPortal(
    isOpen ? (
      <div className={`modal${modify}`}>
        <div className="modal__content">
          <div className="modal__header">
            {!!title && <p className="modal__header-title">{title}</p>}
          </div>
          {children}
        </div>
        <div className="modal__backdrop" onClick={enhancedClose} />
      </div>
    ) : null,
    document.body,
  );
};

// ----------------

// Type of props

Modal.propTypes = {
  children: types.node.isRequired,
  onClose: types.func,
  isOpen: types.bool.isRequired,
  title: types.string,
};

// Default value for props

Modal.defaultProps = {};
