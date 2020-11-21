import React from 'react';
import styled from '@emotion/styled';
import classnames from 'classnames';

import {
  getLocalizeIntentAndColor,
  getLocalizeSizeBy,
  LocalizeIntentThemeType,
  LocalizeProps,
  LocalizeSize,
  LocalizeThemeProps,
} from '@seolhun/localize-components-styled-types';
import { LocalizeIcon } from '@seolhun/localize-components-icon';

const CLASSNAME = '__Localize__Box';
type DivProps = React.HTMLAttributes<HTMLDivElement>;
type Props = LocalizeProps & DivProps & LocalizeBoxContainerProps;

export interface LocalizeBoxProps extends Props {
  /**
   * Set this to change variant
   * @default default
   */
  intent?: LocalizeIntentThemeType;
}

interface LocalizeBoxContainerProps {
  /**
   * Set this to change font color
   * @default sm
   */
  size?: LocalizeSize;

  closable?: boolean;

  onClose?: () => void;
}

const LocalizeBoxWrapper = styled.div<LocalizeBoxProps, LocalizeThemeProps>(
  ({
    theme,
    intent = 'default',
    localize = {
      bgColor: 'primary',
      bdColor: 'transparent',
      fontColor: 'conversion1',
    },
  }) => {
    const localizeColor = getLocalizeIntentAndColor(theme, intent, localize);
    const { backgroundColor, borderColor, color } = localizeColor;
    return {
      position: 'relative',
      color,
      backgroundColor,
      borderColor,
      borderRadius: '8px',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      outline: 'none',
      transition: 'background-color 0.3s, border-color 0.3s, color 0.3s',
      userSelect: 'none',
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

const LocalizeBoxContainer = styled.div<LocalizeBoxContainerProps, LocalizeThemeProps>(
  ({ size, closable }) => {
    return {
      padding: getLocalizeSizeBy(size),
      ...(closable && {
        paddingRight: '52px',
      }),
    };
  },
);

const LocalizeBox: React.FC<LocalizeBoxProps> = ({
  children,
  className,
  size,
  closable,
  onClose,
  ...props
}) => (
  <LocalizeBoxWrapper {...props} className={classnames(CLASSNAME, className)}>
    {closable && (
      <LocalizeBoxCloser onClick={onClose}>
        <LocalizeIcon icon={['fal', 'times']} color="info" iconSize="16px" />
      </LocalizeBoxCloser>
    )}
    <LocalizeBoxContainer size={size} closable={closable}>
      {children}
    </LocalizeBoxContainer>
  </LocalizeBoxWrapper>
);

export { LocalizeBox };
export default LocalizeBox;
