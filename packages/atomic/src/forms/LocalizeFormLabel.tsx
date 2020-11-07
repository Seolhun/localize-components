import React from 'react';
import styled from '@emotion/styled';
import { LocalizeThemeProps } from '@seolhun/localize-components-styled-types';

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

export interface GOCFormLabelProps extends LabelProps {}

const StyledGOCFormLabel = styled.label<{}, LocalizeThemeProps>(({ theme }) => {
  return {
    display: 'block',
    width: '100%',
    color: theme.colors.text1,
    marginBottom: '8px',
  };
});

const GOCFormLabel: React.FC<GOCFormLabelProps> = ({ children, ...props }) => {
  return <StyledGOCFormLabel {...props}>{children}</StyledGOCFormLabel>;
};

export { GOCFormLabel };
export default GOCFormLabel;
