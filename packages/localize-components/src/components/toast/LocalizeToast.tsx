import React from 'react';
import styled from '@emotion/styled';
import { animated, useTransition } from 'react-spring';

import { LocalizeProps, LocalizeThemeProps } from '@seolhun/localize-components-styled-types';
import { LocalizeMediaQueries } from '@seolhun/localize-components-grid';
import { LocalizeIcon, LocalizeText } from '@seolhun/localize-components-atomic';

import { LocalizeToastContext, LocalizeToastMessageUKProps } from './LocalizeToastContext';

type DivProps = React.HTMLAttributes<HTMLDivElement>;
type ExtentionProps = LocalizeProps & DivProps & LocalizeToastMessageUKProps;

export interface LocalizeToastProps extends ExtentionProps {
  timeout: number;
}

const LocalizeToastAnimatedWrapper = styled(animated.div)<{}, LocalizeThemeProps>(() => {
  return {
    '& + &': {
      marginTop: '16px',
    },
  };
});

const LocalizeToastContainer = styled.div<
  {
    type?: keyof LocalizeThemeProps['colors'];
  },
  LocalizeThemeProps
>(({ theme, type = 'success' }) => {
  return {
    position: 'relative',
    backgroundColor: theme.colors[type],
    width: '345px',
    padding: '14px 24px',
    boxShadow: '0px 4px 4px rgba(51, 51, 51, 0.04), 0px 4px 16px rgba(51, 51, 51, 0.08)',
    borderRadius: '8px',

    [LocalizeMediaQueries.XS]: {
      width: '100%',
    },
  };
});

const LocalizeHeaderWrapper = styled.div<{}, LocalizeThemeProps>(() => {
  return {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
  };
});

const LocalizeTitle = styled.div<{}, LocalizeThemeProps>(({ theme }) => {
  return {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    color: theme.colors.white,
  };
});

const LocalizeTitleText = styled.div<{ hasIcon: boolean }, LocalizeThemeProps>(({ hasIcon }) => {
  return {
    width: hasIcon ? '225px' : '255px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  };
});

const LocalizeMessage = styled.div<{}, LocalizeThemeProps>(() => {
  return {
    marginTop: '8px',
    wordBreak: 'break-word',
  };
});

const LocalizeToast: React.FC<LocalizeToastProps> = ({ timeout, visible, id, title, type, message, icon }) => {
  const timeoutRef = React.useRef<any>(null);
  const [, dispatch] = React.useContext(LocalizeToastContext);

  React.useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      dispatch({
        type: 'REMOVE_TOAST',
        payload: id,
      });
    }, timeout);
  }, []);

  const transitions = useTransition(visible, null, {
    from: {
      transform: 'translate3d(100%, 0, 0)',
      opacity: 0,
    },
    enter: {
      transform: 'translate3d(0, 0, 0)',
      opacity: 1,
    },
    leave: {
      transform: 'translate3d(120%, 0, 0)',
      opacity: 0,
    },
  });

  return (
    <>
      {transitions.map(({ item, key, props: styles }) => {
        return (
          item && (
            <LocalizeToastAnimatedWrapper key={key} style={styles}>
              <LocalizeToastContainer type={type}>
                <LocalizeHeaderWrapper>
                  <LocalizeTitle>
                    {icon && <LocalizeIcon color="white" icon={icon} iconSize="24px" margin="0 8px 0 0" />}
                    <LocalizeTitleText hasIcon={!!icon}>{title}</LocalizeTitleText>
                  </LocalizeTitle>
                  <LocalizeIcon
                    onClick={() =>
                      dispatch({
                        type: 'REMOVE_TOAST',
                        payload: id,
                      })
                    }
                    color="white"
                    icon={['fas', 'times']}
                    iconSize="24px"
                    margin="0 0 0 8px"
                  />
                </LocalizeHeaderWrapper>
                {message && (
                  <LocalizeMessage>
                    <LocalizeText type="p" color="white">
                      {message}
                    </LocalizeText>
                  </LocalizeMessage>
                )}
              </LocalizeToastContainer>
            </LocalizeToastAnimatedWrapper>
          )
        );
      })}
    </>
  );
};

export { LocalizeToast };
export default LocalizeToast;
