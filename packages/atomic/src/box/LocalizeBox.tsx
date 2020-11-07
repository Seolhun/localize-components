import React from 'react';
import styled from '@emotion/styled';
import classnames from 'classnames';

import { LocalizeProps, LocalizeThemeProps } from '@seolhun/localize-components-styled-types';

import { LocalizeIcon } from '../icons';

const CLASSNAME = '__Localize__Box';
type DivProps = React.HTMLAttributes<HTMLDivElement>;
type Props = LocalizeProps & DivProps & LocalizeBoxContainerProps;

export interface LocalizeBoxProps extends Props {
  /**
   * @default conversion10
   */
  fontColor?: Props['fontColor'];

  /**
   * @default primary
   */
  bgColor?: Props['bgColor'];

  /**
   * @default undefined
   */
  bdColor?: Props['bdColor'];

  /**
   * @default 12px
   */
  borderRadius?: string;
}

interface LocalizeBoxContainerProps {
  padding?: string;

  closable?: boolean;

  onClose?: () => void;
}

const LocalizeBoxWrapper = styled.div<LocalizeBoxProps, LocalizeThemeProps>(
  ({ theme, fontColor = 'conversion10', bgColor = 'primary', borderRadius = '12px', bdColor }) => {
    const color = theme.colors[fontColor];
    const backgroundColor = theme.colors[bgColor];
    const borderColor = theme.colors[bdColor || bgColor];

    return {
      position: 'relative',
      color,
      backgroundColor,
      borderColor,
      borderRadius,
    };
  },
);

const LocalizeBoxCloser = styled.span<LocalizeProps, LocalizeThemeProps>(() => {
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
    borderRadius: '50%',
  };
});

const LocalizeBoxContainer = styled.div<LocalizeBoxContainerProps, LocalizeThemeProps>(({ padding, closable }) => {
  return {
    padding,
    ...(closable && {
      paddingRight: '52px',
    }),
  };
});

const LocalizeBox: React.FC<LocalizeBoxProps> = ({ children, className, padding, closable, onClose, ...props }) => (
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
