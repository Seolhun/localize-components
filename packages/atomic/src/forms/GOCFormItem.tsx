import React from 'react';
import styled from '@emotion/styled';

import { GOCColProps, GOCCol } from '../grid';
import { GOCFormUIProps } from './GOCFormUITypes';
import GOCFormLabel from './GOCFormLabel';

export interface GOCFormItemProps extends GOCColProps {
  label?: GOCFormUIProps['label'];
}

const GOCFormItemWrapper = styled(GOCCol)<GOCColProps>({});

const GOCFormItemLabelContainer = styled.div({
  position: 'relative',
  width: '100%',
});

const GOCFormItem: React.FC<GOCFormItemProps> = ({
  children,
  label,
  ...props
}) => {
  return (
    <GOCFormItemWrapper {...props} className={`goc-form-item`}>
      {label && (
        <GOCFormItemLabelContainer>
          <GOCFormLabel>{label}</GOCFormLabel>
        </GOCFormItemLabelContainer>
      )}
      {children}
    </GOCFormItemWrapper>
  );
};

export { GOCFormItem };
export default GOCFormItem;
