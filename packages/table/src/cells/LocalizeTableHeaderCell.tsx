import React from 'react';
import styled from '@emotion/styled';
import classnames from 'classnames';
import { Property } from 'csstype';

import { LocalizeThemeProps } from '@seolhun/localize-components-styled-types';

import { LocalizeCellStyle } from './LocalizeCellStyle';
import {
  LocalizeCellHorizontalAlignType,
  LocalizeCellVerticalAlignType,
} from '../LocalizeTableTypes';

const CLASSNAME = '__Localize__Table__HeaderCell';

type DivProps = React.HTMLAttributes<HTMLDivElement>;
type ExtensionProps = DivProps;

export interface LocalizeTableHeaderCellProps extends ExtensionProps {
  width?: Property.Width;

  height?: number;

  verticalAlign?: LocalizeCellVerticalAlignType;

  horizontalAlign?: LocalizeCellHorizontalAlignType;
}

const LocalizeTableHeaderCellWrapper = styled.div<LocalizeTableHeaderCellProps, LocalizeThemeProps>(
  ({ theme, width, height, verticalAlign = 'center', horizontalAlign = 'center' }) => {
    return {
      ...LocalizeCellStyle(theme),
      display: 'inline-flex',
      alignItems: verticalAlign,
      justifyContent: horizontalAlign,
      width,
      height: `${height}px`,
      transition: 'background-color 0.25s',
      borderRight: `1px solid ${theme.colors.neutral3}`,
      borderBottom: `1px solid ${theme.colors.neutral3}`,
      textOverflow: 'ellipsis',
      overflow: 'hidden',

      '&:first-of-type': {
        borderLeft: `1px solid ${theme.colors.neutral3}`,
      },
    };
  },
);

const LocalizeTableHeaderCell: React.FC<LocalizeTableHeaderCellProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <LocalizeTableHeaderCellWrapper {...props} className={classnames(CLASSNAME, className)}>
      {children}
    </LocalizeTableHeaderCellWrapper>
  );
};

export { LocalizeTableHeaderCell };
export default LocalizeTableHeaderCell;
