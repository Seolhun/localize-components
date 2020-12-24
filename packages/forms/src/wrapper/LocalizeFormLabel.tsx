import React from 'react';
import styled from '@emotion/styled';
import { LocalizeThemeProps } from '@seolhun/localize-components-styled-types';

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

export interface LocalizeFormLabelProps extends LabelProps {}

const StyledLocalizeFormLabel = styled.label<{}, LocalizeThemeProps>(({ theme }) => {
  return {
    display: 'block',
    width: '100%',
    color: theme.colors.inversed10,
    marginBottom: '8px',
  };
});

const LocalizeFormLabel: React.FC<LocalizeFormLabelProps> = ({ children, ...props }) => {
  return <StyledLocalizeFormLabel {...props}>{children}</StyledLocalizeFormLabel>;
};

export { LocalizeFormLabel };
export default LocalizeFormLabel;
