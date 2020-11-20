import React from 'react';
import styled from '@emotion/styled';
import classnames from 'classnames';

import { LocalizeThemeProps } from '@seolhun/localize-components-styled-types';

import LocalizeCellStyles from './LocalizeCellStyle';

const CLASSNAME = '__Localize__Table__HeaderCell';

type ThProps = React.TableHTMLAttributes<HTMLTableHeaderCellElement>;
type ExtensionProps = ThProps;
export interface LocalizeTableHeaderCellProps extends ExtensionProps {}

const LocalizeTableHeaderCellWrapper = styled.th<{}, LocalizeThemeProps>(({ theme }) => {
  return {
    ...LocalizeCellStyles(theme),
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
