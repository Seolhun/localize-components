import React from 'react';
import styled from '@emotion/styled';
import { GOCThemeProps } from '@/context';

export interface GOCFormDescriptionProps {
  error?: React.ReactNode;
}

const StyledDescription = styled.div<GOCFormDescriptionProps, GOCThemeProps>(
  ({ theme, error }) => {
    return {
      ...theme.fonts.body2,
      color: error ? theme.colors.error : theme.colors['black-45'],
      marginTop: '8px',
      minHeight: '20px',
    };
  },
);

const GOCFormDescription: React.FC<GOCFormDescriptionProps> = ({
  error,
  children,
}) => {
  return <StyledDescription error={error}>{children}</StyledDescription>;
};

export { GOCFormDescription };
export default GOCFormDescription;
