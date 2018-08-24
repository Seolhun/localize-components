import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ children, onClickClose, className }) => {
  Modal.propTypes = {
    children: PropTypes.node.isRequired,
    onClickClose: PropTypes.func.isRequired,
    className: PropTypes.string,
  };

  Modal.defaultProps = {
    className: '',
  };

  return (
    <div className="modal md">
      <div className={`modal-content ${className} v-top slideInDown height-70`}>
        <div className="height-100">
          <div>
            {children}
          </div>
          <div
            onClick={onClickClose}
            className="modal-close-btn"
            role="presentation"
          >
            <i
              className="material-icons md-36"
              style={{ color: 'rgba(255, 255, 255, .7)' }}
            >
              close
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
