import React, { ReactNode } from 'react';
import { FlexDirectionProperty, AlignItemsProperty, JustifyContentProperty } from 'csstype';

import styled from '@emotion/styled';
import { ILocalizeTheme, LocalizeTheme } from '@seolhun/localize-components-styled-types';
import classnames from 'classnames';

const DEFAULT_CLASSNAME = '__Localize__Row';

interface RowProps {
  children: ReactNode;
  className?: string;
  isWrap?: boolean;
  flexDirection?: FlexDirectionProperty;
  alignItems?: AlignItemsProperty;
  justifyContent?: JustifyContentProperty;
  css?: {};
}

const StyledRow = styled.div<RowProps, ILocalizeTheme>(({
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
      marginRight: theme.grid.rowGutter.right || LocalizeTheme.grid.rowGutter.right,
      marginLeft: theme.grid.rowGutter.left || LocalizeTheme.grid.rowGutter.left,

      [`.${DEFAULT_CLASSNAME} + .${DEFAULT_CLASSNAME}`]: {
        marginTop: theme.grid.rowGutter.top || LocalizeTheme.grid.rowGutter.top,
      },
    };
  }
);

const Row = ({
  children,
  className,
  css = {},
  ...props
}: RowProps) => {
  return (
    <StyledRow
      {...props}
      className={classnames(DEFAULT_CLASSNAME, className)}
      css={css}
    >
      {children}
    </StyledRow>
  )
}

export {
  RowProps,
  Row,
}

export default Row;
