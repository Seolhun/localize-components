import React from 'react';
import styled from '@emotion/styled';
import classnames from 'classnames';

import { LocalizeFormStateProps } from '../LocalizeFormStateProps';
import { LocalizeFormLabel } from './LocalizeFormLabel';
import { LocalizeFormDescription } from './LocalizeFormDescription';

const CLASSNAME = '__Localize__Form__Information';
type DivProps = React.HTMLAttributes<HTMLDivElement>;
type Props = DivProps & LocalizeFormStateProps;

export interface LocalizeFormWrapperProps extends Props {
  name?: string;
}

const LocalizeFormWrapperWrapper = styled.div({
  position: 'relative',
  width: '100%',
});

const LocalizeFormWrapper: React.FC<LocalizeFormWrapperProps> = ({
  children,
  className,
  label,
  help,
  error,
  ...props
}) => {
  const hasHelpOrError = !!help || !!error;

  return (
    <LocalizeFormWrapperWrapper {...props} className={classnames(CLASSNAME, className)}>
      {label && <LocalizeFormLabel>{label}</LocalizeFormLabel>}
      {children}
      {hasHelpOrError && (
        <LocalizeFormDescription error={error}>{error || help}</LocalizeFormDescription>
      )}
    </LocalizeFormWrapperWrapper>
  );
};

export { LocalizeFormWrapper };
export default LocalizeFormWrapper;
