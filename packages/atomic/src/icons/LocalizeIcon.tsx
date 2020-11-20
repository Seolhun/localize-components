import React from 'react';
import styled from '@emotion/styled';
import classnames from 'classnames';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';

import {
  LocalizeProps,
  LocalizeThemeProps,
} from '@seolhun/localize-components-styled-types';

type SpanProps = React.HTMLAttributes<HTMLSpanElement>;
type ExtentionProps = LocalizeProps & SpanProps & LocalizeIconBackgroundProps;

export interface LocalizeIconProps extends ExtentionProps {
  icon: FontAwesomeIconProps['icon'];

  color?: keyof LocalizeThemeProps['colors'];

  rotation?: FontAwesomeIconProps['rotation'];

  hoveredColor?: keyof LocalizeThemeProps['colors'];

  iconSize?: string;

  /**
   * @default 1x
   * @description 1x ~ 10x
   */
  iconImageSize?: FontAwesomeIconProps['size'];

  margin?: string;
}

interface LocalizeIconBackgroundProps {
  /**
   * @description 아이콘 보다 더 큰 배경화면이 존재하는 경우가 많아 이를 처리하기 위해 만듦. iconBackgroundSize가 가장 우선시 되는 변수값이며, 해당 값이 존재하지 않으면 iconBackground 모든 Props가 작동되지 않음.
   */
  iconBackgroundSize?: string;

  iconBackgroundBorderRadius?: string;

  iconBackgroundColor?: keyof LocalizeThemeProps['colors'];

  iconBackgroundOpacity?: string;
}

const IconWrapper = styled.span<LocalizeIconProps, LocalizeThemeProps>(
  ({ theme, margin, iconSize, color, hoveredColor, iconBackgroundSize }) => {
    return {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: iconBackgroundSize,
      height: iconBackgroundSize,
      fontSize: iconSize,
      color: color ? theme.colors[color] : 'inherit',
      margin,
      cursor: 'pointer',
      userSelect: 'none',
      '&:hover': hoveredColor
        ? {
            color: theme.colors[hoveredColor],
          }
        : null,
    };
  },
);

const IconContainer = styled.span<{}, LocalizeThemeProps>(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1,
}));

const IconBackgroundContainer = styled.div<
  LocalizeIconBackgroundProps,
  LocalizeThemeProps
>(
  ({
    theme,
    iconBackgroundBorderRadius,
    iconBackgroundColor,
    iconBackgroundSize,
    iconBackgroundOpacity,
  }) => ({
    position: 'absolute',
    width: iconBackgroundSize,
    height: iconBackgroundSize,
    backgroundColor: iconBackgroundColor
      ? theme.colors[iconBackgroundColor]
      : 'inherit',
    borderRadius: iconBackgroundBorderRadius,
    opacity: iconBackgroundOpacity,
  }),
);

const LocalizeIcon = React.forwardRef<HTMLSpanElement, LocalizeIconProps>(
  (
    {
      icon,
      color,
      iconImageSize = '1x',
      iconSize,
      margin,
      rotation,
      hoveredColor,
      iconBackgroundSize,
      iconBackgroundColor,
      iconBackgroundBorderRadius,
      iconBackgroundOpacity,
      ...props
    },
    ref,
  ) => (
    <IconWrapper
      {...props}
      ref={ref}
      className={classnames(props.className, 'goc-icon anticon')}
      icon={icon}
      color={color}
      hoveredColor={hoveredColor}
      iconImageSize={iconImageSize}
      iconSize={iconSize}
      iconBackgroundSize={iconBackgroundSize}
      margin={margin}
    >
      {iconBackgroundSize && (
        <IconBackgroundContainer
          iconBackgroundSize={iconBackgroundSize}
          iconBackgroundColor={iconBackgroundColor}
          iconBackgroundBorderRadius={iconBackgroundBorderRadius}
          iconBackgroundOpacity={iconBackgroundOpacity}
        />
      )}
      <IconContainer>
        <FontAwesomeIcon icon={icon} size={iconImageSize} rotation={rotation} />
      </IconContainer>
    </IconWrapper>
  ),
);

export { LocalizeIcon };
export default LocalizeIcon;
