import React from 'react';

export interface TabProps {
  onClick: (...args: any[]) => any;
  children: React.ReactNode;
  // isNotRequired
  className?: string;
}

const Tab: React.SFC<TabProps> = ({
  onClick,
  children,
  // isNotRequired
  className = '',
}) => (
  <button
    className={className}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Tab;
