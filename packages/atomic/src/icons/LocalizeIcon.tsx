import React from 'react';
import styled from '@emotion/styled';
import classnames from 'classnames';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';

import {
  LocalizeThemeProps,
  LocalizeProps,
} from '@seolhun/localize-components-styled-types';

const DEFAULT_CLASSNAME = '__Localize__Icon';
type DivProps = React.HTMLAttributes<HTMLDivElement>;

export interface LocalizeIconProps extends LocalizeProps, DivProps {
  icon: FontAwesomeIconProps['icon'];

  color?: keyof LocalizeThemeProps['colors'];

  size?: string;
}

interface LocalizeIconContainerProps {
  color?: LocalizeIconProps['color'];

  size?: LocalizeIconProps['size'];
}

const IconWrapper = styled.div({
  display: 'inline-block',
});

const IconContainer = styled.span<
  LocalizeIconContainerProps,
  LocalizeThemeProps
>(({ theme, color, size = '12px' }) => ({
  color: color ? theme.colors[color] : 'inherit',
  width: size,
  height: size,

  svg: {
    fontSize: size,
  },
}));

const LocalizeIcon: React.FC<LocalizeIconProps> = ({
  icon,
  color,
  size,
  className,
  ...props
}) => (
  <IconWrapper {...props} className={classnames(DEFAULT_CLASSNAME, className)}>
    <IconContainer color={color} size={size}>
      <FontAwesomeIcon className="LocalizeIcon" icon={icon} size="10x" />
    </IconContainer>
  </IconWrapper>
);

export { LocalizeIcon };
export default LocalizeIcon;
