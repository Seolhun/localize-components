import React from 'react';
import styled from '@emotion/styled';

import { LocalizeThemeProps } from '@seolhun/localize-components-styled-types';

export interface LocalizeFormDescriptionProps {
  error?: React.ReactNode;
}

const Description = styled.div<LocalizeFormDescriptionProps, LocalizeThemeProps>(
  ({ theme, error }) => {
    return {
      color: error ? theme.colors.error : theme.colors.conversion10,
      marginTop: '8px',
      minHeight: '20px',
    };
  },
);

const LocalizeFormDescription: React.FC<LocalizeFormDescriptionProps> = ({ error, children }) => {
  return <Description error={error}>{children}</Description>;
};

export { LocalizeFormDescription };
export default LocalizeFormDescription;
