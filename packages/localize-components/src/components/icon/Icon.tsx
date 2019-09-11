import styled from '@emotion/styled'

import { LocalizeBaseStyledProps } from '@seolhun/localize-components-styled-types';

export interface IconProps extends LocalizeBaseStyledProps {
  /**
   * Set this to change Icon image Url
   */
  src: string;
  /**
   * Set this to change Icon width
   */
  width?: string
  /**
   * Set this to change Icon Height
   */
  height?: string
  /**
   * Set this to change Icon backgroundSize
   */
  backgroundSize?: string;
  /**
   * Set this to change Icon backgroundRepeat
   */
  backgroundRepeat?: string;
    /**
   * Set this to change Icon backgroundPosition
   */
  backgroundPosition?: string;
  /**
   * Set this to change Icon height
   */
  borderRadius?: string
}

export const Icon = styled.div<IconProps>(({
  src,
  width,
  height,
  backgroundSize,
  backgroundRepeat,
  backgroundPosition,
  borderRadius,
}) => {
  return {
    background: `url(${src})`,
    backgroundSize: backgroundSize || 'contain',
    backgroundRepeat: backgroundRepeat || 'no-repeat',
    backgroundPosition: backgroundPosition || 'center',
    width: width || '25px',
    height: height || '25px',
    borderRadius: borderRadius || '5px',
  }
})

export default Icon;
