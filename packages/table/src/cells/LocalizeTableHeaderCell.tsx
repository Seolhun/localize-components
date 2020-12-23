import React from 'react';
import styled from '@emotion/styled';
import classnames from 'classnames';

import { LocalizeThemeProps } from '@seolhun/localize-components-styled-types';

import { LocalizeCellProps, LocalizeCellStyle } from './LocalizeCellStyle';

const CLASSNAME = '__Localize__Table__HeaderCell';

type DivProps = React.HTMLAttributes<HTMLDivElement>;
type ExtensionProps = DivProps & LocalizeCellProps;

export interface LocalizeTableHeaderCellProps extends ExtensionProps {}

const LocalizeTableHeaderCellWrapper = styled.div<LocalizeTableHeaderCellProps, LocalizeThemeProps>(
  ({ theme, width, height, verticalAlign = 'center', horizontalAlign = 'center', freezing }) => {
    return {
      ...LocalizeCellStyle(theme),
      position: freezing ? 'fixed' : 'unset',
      display: 'inline-flex',
      alignItems: verticalAlign,
      justifyContent: horizontalAlign,
      width,
      minWidth: width,
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
