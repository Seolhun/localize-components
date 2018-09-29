import * as React from 'react';

interface Modal {
  children: React.ReactNode;
  onClickClose?: (...args: any[]) => any;
  className?: string;
}

const Modal = ({ children, onClickClose, className = '' }) => {
  return (
    <div className="modal md">
      <div className={`modal-content ${className} v-top slideInDown height-70`}>
        <div className="height-100">
          <div>{children}</div>
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
