import React from 'react';
import classnames from 'classnames';
import styled from '@emotion/styled';

import {
  LocalizeProps,
  LocalizeThemeProps,
} from '@seolhun/localize-components-styled-types';
import {
  BackgroundPositionProperty,
  BackgroundSizeProperty,
  BackgroundRepeatProperty,
  BorderRadiusProperty,
  WidthProperty,
  HeightProperty,
} from 'csstype';

import { LocalizeIcon } from '../icons';

const DEFAULT_CLASSNAME = '__Localize__Image';
type ImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

export interface LocalizeImageProps extends LocalizeProps, ImageProps {
  responsive?: boolean;

  width?: WidthProperty<string>;

  height?: HeightProperty<string>;

  backgroundPosition?: BackgroundPositionProperty<string>;

  /**
   * @default cover
   */
  backgroundSize?: BackgroundSizeProperty<string>;

  backgroundRepeat?: BackgroundRepeatProperty;

  borderRadius?: BorderRadiusProperty<string>;
}

const LocalizeImageWrapper = styled.div<LocalizeImageProps>(
  ({ width, height, responsive }) => ({
    width: responsive && !width ? '100%' : width || '100px',
    height: responsive && !height ? '100%' : height || '100px',
    ...(responsive && {
      position: 'relative',
      paddingBottom: '56.2%',
    }),
  }),
);

const LocalizeImageContainer = styled.div(() => ({
  width: '100%',
  height: '100%',
  position: 'absolute',
}));

const SHHiddenImageElement = styled.img<LocalizeImageProps>(() => ({
  position: 'absolute',
  width: 0,
  height: 0,
  opacity: 0,
}));

const LocalizeImageElement = styled.div<LocalizeImageProps>(
  ({
    src,
    borderRadius,
    backgroundPosition,
    backgroundRepeat,
    backgroundSize,
  }) => ({
    width: '100%',
    height: '100%',
    backgroundImage: src && `url(${src})`,
    backgroundPosition: backgroundPosition || '50% 50%',
    backgroundRepeat: backgroundRepeat || 'no-repeat',
    backgroundSize,
    borderRadius,
  }),
);

const LocalizeImageEmptryImage = styled.div<
  LocalizeImageProps,
  LocalizeThemeProps
>(({ theme, borderRadius }) => {
  return {
    display: 'flex',
    minWidth: '100%',
    minHeight: '100%',
    backgroundColor: theme.colors.neutral8,
    borderRadius,
  };
});

const LocalizeImageEmptryImageLogo = styled.div<{}, LocalizeThemeProps>(() => ({
  margin: 'auto',
}));

const LocalizeImage: React.FC<LocalizeImageProps> = ({
  children,
  width,
  height,
  responsive,
  src,
  backgroundSize = 'cover',
  className,
  ...props
}) => {
  const [hasError, setError] = React.useState(false);

  React.useEffect(() => {
    if (src) {
      setError(false);
    }
  }, [src]);

  const handleImgError = () => {
    setError(true);
  };

  return (
    <LocalizeImageWrapper
      className={classnames(DEFAULT_CLASSNAME, className)}
      width={width}
      height={height}
      responsive={responsive}
    >
      <LocalizeImageContainer>
        {hasError || !src ? (
          <LocalizeImageEmptryImage {...props}>
            <LocalizeImageEmptryImageLogo>
              <LocalizeIcon icon={['fas', 'image']} size="28px" />
            </LocalizeImageEmptryImageLogo>
          </LocalizeImageEmptryImage>
        ) : (
          <LocalizeImageElement
            {...props}
            src={src}
            backgroundSize={backgroundSize}
          >
            <SHHiddenImageElement
              {...props}
              src={src}
              onError={handleImgError}
            />
          </LocalizeImageElement>
        )}
      </LocalizeImageContainer>
    </LocalizeImageWrapper>
  );
};

export { LocalizeImage };
export default LocalizeImage;
