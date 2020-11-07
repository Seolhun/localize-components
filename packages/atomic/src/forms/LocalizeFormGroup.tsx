import React from 'react';
import styled from '@emotion/styled';

import {
  LocalizeRow,
  LocalizeRowProps,
} from '@seolhun/localize-components-grid';

export interface LocalizeFormGroupProps extends LocalizeRowProps {}

const StyledFormGroup = styled(LocalizeRow)<LocalizeRowProps>({
  [`${LocalizeRow} + ${LocalizeRow}`]: {
    marginTop: '24px',
  },
});

const LocalizeFormGroup: React.FC<LocalizeFormGroupProps> = ({
  children,
  ...props
}) => {
  return <StyledFormGroup {...props}>{children}</StyledFormGroup>;
};

export { LocalizeFormGroup };
export default LocalizeFormGroup;
