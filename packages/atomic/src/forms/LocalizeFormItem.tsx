import React from 'react';
import styled from '@emotion/styled';
import classnames from 'classnames';

import { LocalizeColProps, LocalizeCol } from '@seolhun/localize-components-grid';

import { LocalizeFormStateProps } from './LocalizeFormStateProps';
import { LocalizeFormWrapper } from './wrapper';

const CLASSNAME = '__Localize__FormItem';
export interface LocalizeFormItemProps extends LocalizeColProps {
  label?: LocalizeFormStateProps['label'];

  help?: LocalizeFormStateProps['help'];

  error?: LocalizeFormStateProps['error'];
}

const LocalizeFormItemWrapper = styled(LocalizeCol)<LocalizeColProps>({});

const LocalizeFormItem: React.FC<LocalizeFormItemProps> = ({ children, className, label, help, error, ...props }) => {
  return (
    <LocalizeFormItemWrapper {...props} className={classnames(CLASSNAME, className)}>
      <LocalizeFormWrapper label={label} help={help} error={error}>
        {children}
      </LocalizeFormWrapper>
    </LocalizeFormItemWrapper>
  );
};

export { LocalizeFormItem };
export default LocalizeFormItem;
