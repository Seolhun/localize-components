import React from 'react';
import styled from '@emotion/styled';
import classnames from 'classnames';

import { LocalizeThemeProps } from '@seolhun/localize-components-styled-types';

import { LocalizeIcon } from '../icons';

const CLASSNAME = '__Localize__Box';
type DivProps = React.HTMLAttributes<HTMLDivElement>;

export interface LocalizeBoxProps extends LocalizeBoxContainerProps {
  /**
   * @default primary
   */
  color?: keyof LocalizeThemeProps['colors'];

  /**
   * @default info
   */
  backgroundColor?: keyof LocalizeThemeProps['colors'];

  /**
   * @default 16px
   */
  borderRadius?: string;
}

interface LocalizeBoxContainerProps extends DivProps {
  padding?: string;

  closable?: boolean;

  onClose?: () => void;
}

const LocalizeBoxWrapper = styled.div<LocalizeBoxProps, LocalizeThemeProps>(
  ({
    theme,
    color = 'primary',
    backgroundColor = 'info',
    borderRadius = '16px',
  }) => ({
    position: 'relative',
    color: theme.colors[color],
    backgroundColor: theme.colors[backgroundColor],
    borderRadius,
  }),
);

const LocalizeBoxCloser = styled.span<{}, LocalizeThemeProps>(({ theme }) => {
  return {
    position: 'absolute',
    right: '16px',
    top: '16px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '32px',
    height: '32px',
    border: `1px solid ${theme.colors.info}`,
    borderRadius: '50%',
  };
});

const LocalizeBoxContainer = styled.div<
  LocalizeBoxContainerProps,
  LocalizeThemeProps
>(({ padding, closable }) => {
  return {
    padding,
    ...(closable && {
      paddingRight: '52px',
    }),
  };
});

const LocalizeBox: React.FC<LocalizeBoxProps> = ({
  children,
  padding,
  closable,
  onClose,
  className,
  ...props
}) => (
  <LocalizeBoxWrapper {...props} className={classnames(CLASSNAME, className)}>
    {closable && (
      <LocalizeBoxCloser onClick={onClose}>
        <LocalizeIcon icon={['fal', 'times']} color="info" iconSize="16px" />
      </LocalizeBoxCloser>
    )}
    <LocalizeBoxContainer padding={padding} closable={closable}>
      {children}
    </LocalizeBoxContainer>
  </LocalizeBoxWrapper>
);

export { LocalizeBox };
export default LocalizeBox;
