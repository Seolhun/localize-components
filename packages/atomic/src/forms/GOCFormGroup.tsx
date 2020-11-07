import React from 'react';
import styled from '@emotion/styled';

import { GOCRow, GOCRowProps } from '../grid';

export interface GOCFormGroupProps extends GOCRowProps {}

const StyledFormGroup = styled(GOCRow)<GOCRowProps>({
  '.goc-form-item + .goc-form-item': {
    marginTop: '24px',
  },
});

const GOCFormGroup: React.FC<GOCFormGroupProps> = ({ children, ...props }) => {
  return <StyledFormGroup {...props}>{children}</StyledFormGroup>;
};

export { GOCFormGroup };
export default GOCFormGroup;
