import React from 'react';

import styled from '@emotion/styled';

import classnames from 'classnames';

import {
  LocalizeThemeProps,
  LocalizeProps,
} from '@seolhun/localize-components-styled-types';

export interface LocalizeChipProps extends LocalizeProps {}

const StyledLocalizeChip = styled.button<LocalizeChipProps, LocalizeThemeProps>(
  ({ theme }) => {
    return {
      borderRadius: '6px',
      border: `1px solid ${theme.colors.primary01}`,
      backgroundColor: theme.colors.primaryBackground01,
      color: theme.colors.primary01,
      cursor: 'pointer',
      height: 'auto',
      outline: 'none',
      transition: 'background-color 0.3s, border-color 0.3s',
      verticalAlign: 'middle',

      '&:not(:disabled):not(.disabled)': {
        cursor: 'pointer',
      },

      '&:hover': {
        backgroundColor: theme.colors.primary01,
        borderColor: theme.colors.primaryBackground01,
      },

      '&:disabled': {
        backgroundColor: theme.colors.uiColor07,
        color: theme.colors.uiColor08,
        cursor: 'not-allowed',
      },
    };
  },
);

export const LocalizeChip: React.FC<LocalizeChipProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <StyledLocalizeChip
      {...props}
      className={classnames('__Localize__Chip', className)}
    >
      {children}
    </StyledLocalizeChip>
  );
};

export default LocalizeChip;
