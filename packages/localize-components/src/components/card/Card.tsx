import React from 'react';

import classnames from 'classnames';

const styles = require('./Card.css');

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

const Card: React.SFC<CardProps> = ({
  className,
  children,
  style,
}) => (
  <div
    className={classnames(
      className,
      styles.Card,
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
