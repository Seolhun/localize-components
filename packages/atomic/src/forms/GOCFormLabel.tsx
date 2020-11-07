import React from 'react';
import styled from '@emotion/styled';

import { GOCThemeProps } from '@/context';

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

export interface GOCFormLabelProps extends LabelProps {}

const StyledGOCFormLabel = styled.label<{}, GOCThemeProps>(({ theme }) => {
  return {
    ...theme.fonts.subtitle1,
    display: 'block',
    width: '100%',
    color: theme.colors['black-65'],
    marginBottom: '8px',
  };
});

const GOCFormLabel: React.FC<GOCFormLabelProps> = ({ children, ...props }) => {
  return <StyledGOCFormLabel {...props}>{children}</StyledGOCFormLabel>;
};

export { GOCFormLabel };
export default GOCFormLabel;
