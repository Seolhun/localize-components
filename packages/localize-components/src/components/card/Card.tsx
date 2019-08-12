import React from 'react';

import classnames from 'classnames';

import './Card.scss';

export interface CardProps {
  children: React.ReactNode;
  // IsNotRequired
  className?: string;
  style?: {
    color?: string;
    backgroundColor?: string;
    padding?: string;
    margin?: string;
  };
}

const Card: React.FunctionComponent<CardProps> = ({
  className,
  children,
  style,
}) => (
  <div
    className={classnames(
      '__Localize__Card',
      className,
    )}
    style={style}
  >
    {children}
  </div>
);

Card.defaultProps = {
  className: '',
  style: {
    color: '',
    backgroundColor: '',
    padding: '',
    margin: '',
  },
};

export default Card;
