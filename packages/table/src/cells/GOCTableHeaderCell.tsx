import React from 'react';
import styled from '@emotion/styled';
import classnames from 'classnames';

import { GOCThemeProps } from '@/context';

import GOCCellStyles from './GOCCellStyle';

const CLASSNAME = 'GOC__TABLE__HeaderCell';


type ThProps = React.TableHTMLAttributes<HTMLTableHeaderCellElement>;
type ExtensionProps = ThProps;
export interface GOCTableHeaderCellProps extends ExtensionProps {}

const GOCTableHeaderCellWrapper = styled.th<{}, GOCThemeProps>(({ theme }) => {
  return {
    ...GOCCellStyles(theme),
    backgroundColor: theme.colors.neutral3,
    borderBottom: `1px solid ${theme.colors.neutral3}`,
    transition: 'background-color 0.25s',
  };
});

const GOCTableHeaderCell: React.FC<GOCTableHeaderCellProps> = ({
  children,
  className,
  ...props
}) => {
  return <GOCTableHeaderCellWrapper {...props} className={classnames(CLASSNAME, className)}>{children}</GOCTableHeaderCellWrapper>;
};

export { GOCTableHeaderCell };
export default GOCTableHeaderCell;
