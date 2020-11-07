import React from 'react';
import styled from '@emotion/styled';
import classnames from 'classnames';

import { LocalizeColProps, LocalizeCol } from '@seolhun/localize-components-grid';

import { LocalizeFormUIProps } from './LocalizeFormUITypes';
import LocalizeFormLabel from './LocalizeFormLabel';
import LocalizeFormDescription from './LocalizeFormDescription';

const CLASSNAME = '__Localize__FormItem';
export interface LocalizeFormItemProps extends LocalizeColProps {
  label?: LocalizeFormUIProps['label'];

  help?: LocalizeFormUIProps['help'];

  error?: LocalizeFormUIProps['error'];
}

const LocalizeFormItemWrapper = styled(LocalizeCol)<LocalizeColProps>({});

const LocalizeFormItem: React.FC<LocalizeFormItemProps> = ({ children, className, label, help, error, ...props }) => {
  return (
    <LocalizeFormItemWrapper {...props} className={classnames(CLASSNAME, className)}>
      {label && <LocalizeFormLabel>{label}</LocalizeFormLabel>}
      {children}
      {help && <LocalizeFormDescription error={error}>{help}</LocalizeFormDescription>}
    </LocalizeFormItemWrapper>
  );
};

export { LocalizeFormItem };
export default LocalizeFormItem;
