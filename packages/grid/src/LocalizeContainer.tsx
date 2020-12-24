import React from 'react';
import styled from '@emotion/styled';
import classnames from 'classnames';

import { LocalizeMediaQueryEnum } from './LocalizeGrid.Helpers';

const CLASSNAME = '__Localize__Container';

type DivProps = React.HTMLAttributes<HTMLDivElement>;
type ExtentionProps = DivProps;

export interface LocalizeContainerProps extends ExtentionProps {
  isFull?: boolean;
}

const LocalizeStyledContainer = styled.div<LocalizeContainerProps>(({ isFull }) => () => ({
  maxWidth: isFull ? '100%' : LocalizeMediaQueryEnum.LG,
  width: '100%',
  flexGrow: 1,
  flexShrink: 0,
  paddingRight: 0,
  paddingLeft: 0,
  margin: 'auto',
}));

const LocalizeContainer: React.FC<LocalizeContainerProps> = ({ children, className, ...props }) => {
  return (
    <LocalizeStyledContainer {...props} className={classnames(CLASSNAME, className)}>
      {children}
    </LocalizeStyledContainer>
  );
};

export { LocalizeContainer };
export default LocalizeContainer;
