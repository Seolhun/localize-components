import React from 'react';
import { FlexDirectionProperty, AlignItemsProperty, JustifyContentProperty } from 'csstype';
import { LocalizeThemeProps } from '@seolhun/localize-components-styled-types';

import styled from '@emotion/styled';
import classnames from 'classnames';

const DEFAULT_CLASSNAME = '__Localize__Row';

interface LocalizeRowProps {
  className?: string;
  isWrap?: boolean;
  flexDirection?: FlexDirectionProperty;
  alignItems?: AlignItemsProperty;
  justifyContent?: JustifyContentProperty;
}

const StyledRow = styled.div<LocalizeRowProps, LocalizeThemeProps>(({
  theme,
  flexDirection = 'row',
  isWrap = true,
  alignItems = 'center',
  justifyContent = 'flex-start',
}) => {
  return {
    display: 'flex',
    flexWrap: isWrap ? 'wrap' : 'nowrap',
    flexDirection,
    alignItems,
    justifyContent,
    boxSizing: 'border-box',
    marginRight: theme.grid.rowGutter.right,ㅔ
    marginLeft: theme.grid.rowGutter.left,

    [`.${DEFAULT_CLASSNAME} + .${DEFAULT_CLASSNAME}`]: {
      marginTop: theme.grid.rowGutter.top,
    },
  };
});

const LocalizeRow: React.FC<LocalizeRowProps> = ({
  children,
  className,
  ...props,
}) => {
  return (
    <StyledRow {...props} className={classnames(DEFAULT_CLASSNAME, className)}>
      {children}
    </StyledRow>
  );
};

export { LocalizeRowProps, LocalizeRow };

export default LocalizeRow;
