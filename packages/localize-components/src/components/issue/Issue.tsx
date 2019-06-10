import React from 'react';

import './Issue.scss';

export interface IssueProps {
  title: string;
  // IsNotRequired
  children?: React.ReactNode;
  className?: string;
  description?: string;
}

const Issue: React.SFC<IssueProps> = ({
  title,
  // IsNotRequired
  children = null,
  className = '',
  description = '',
}) => (
  <div className={`__Localize__Issue ${className}`}>
    <p className={`Title`}>{title}</p>
    <p className={`Description`}>{description}</p>
    <div className={`Resolver`}>{children}</div>
  </div>
);

export default Issue;
