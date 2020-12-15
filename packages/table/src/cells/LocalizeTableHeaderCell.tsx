import React from 'react';
import styled from '@emotion/styled';
import classnames from 'classnames';
import { Property } from 'csstype';

import { LocalizeThemeProps } from '@seolhun/localize-components-styled-types';

import LocalizeCellStyles from './LocalizeCellStyle';

const CLASSNAME = '__Localize__Table__HeaderCell';

type ThProps = React.HTMLAttributes<HTMLTableHeaderCellElement>;
type ExtensionProps = ThProps;
export interface LocalizeTableHeaderCellProps extends ExtensionProps {
  width?: Property.Width;
}

const LocalizeTableHeaderCellWrapper = styled.th<LocalizeTableHeaderCellProps, LocalizeThemeProps>(({ theme, width }) => {
  return {
    ...LocalizeCellStyles(theme),
    width,
    backgroundColor: theme.colors.neutral3,
    borderBottom: `1px solid ${theme.colors.neutral3}`,
    transition: 'background-color 0.25s',
  };
});

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
