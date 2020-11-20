import React from 'react';
import styled from '@emotion/styled';
import classnames from 'classnames';

import {
  LocalizeProps,
  LocalizeThemeProps,
} from '@seolhun/localize-components-styled-types';
import { LocalizeMediaQueries } from '@seolhun/localize-components-grid';
import {
  LocalizeToastContext,
  LocalizeToastMessageUKProps,
  LocalizeToastDispatchActionType,
} from './LocalizeToastContext';
import { LocalizeToast } from './LocalizeToast';

type LocalizeToastPlacementType = 'top-left' | 'top-right';

type DivProps = React.HTMLAttributes<HTMLDivElement>;
type ExtentionProps = LocalizeProps & DivProps & LocalizeToastMessageUKProps;

export interface LocalizeToastProviderProps extends ExtentionProps {
  /**
   * @default top-right
   */
  placement?: LocalizeToastPlacementType;

  /**
   * @default 5000
   */
  timeout?: number;
}

const LocalizeToastProviderWrapper = styled.div<{}, LocalizeThemeProps>(() => {
  return {
    position: 'relative',
    zIndex: 1000,
  };
});

const LocalizeToastProviderContainer = styled.div<{}, LocalizeThemeProps>(
  () => {
    return {
      position: 'fixed',

      '&.top-left': {
        top: '1rem',
        left: '1rem',

        [LocalizeMediaQueries.XS]: {
          right: '1rem',
        },
      },
      '&.top-right': {
        top: '1rem',
        right: '1rem',

        [LocalizeMediaQueries.XS]: {
          left: '1rem',
        },
      },
    };
  },
);

const toastReducer: React.Reducer<
  LocalizeToastMessageUKProps[],
  LocalizeToastDispatchActionType
> = (state = [], action) => {
  const { payload, type } = action;
  switch (type) {
    case 'ADD_TOAST': {
      const newItemUK = Math.random()
        .toString(36)
        .substring(2);
      return [
        ...state,
        {
          ...payload,
          id: newItemUK,
          visible: true,
        },
      ];
    }
    case 'REMOVE_TOAST': {
      const toastIndex = state.findIndex((toast) => toast.id === payload);
      if (toastIndex !== -1) {
        const copiedToasts = [...state];
        copiedToasts[toastIndex] = {
          ...copiedToasts[toastIndex],
          visible: false,
        };
        return copiedToasts;
      }
      return [...state];
    }
    case 'RESET_TOASTS': {
      if (state.every((toast) => !toast.visible)) {
        return [];
      }
      return [...state];
    }
    default: {
      return [...state];
    }
  }
};

const LocalizeToastProvider: React.FC<LocalizeToastProviderProps> = ({
  children,
  placement = 'top-right',
  timeout = 5000,
}) => {
  const [toasts, dispatch] = React.useReducer(toastReducer, []);

  React.useEffect(() => {
    setTimeout(() => {
      dispatch({
        type: 'RESET_TOASTS',
      });
    }, 500);
  }, [JSON.stringify(toasts)]);

  return (
    <LocalizeToastContext.Provider value={[toasts, dispatch]}>
      <LocalizeToastProviderWrapper>
        <LocalizeToastProviderContainer className={classnames(placement)}>
          {toasts.map((toast, index) => (
            <LocalizeToast {...toast} key={index} timeout={timeout} />
          ))}
        </LocalizeToastProviderContainer>
      </LocalizeToastProviderWrapper>
      {children}
    </LocalizeToastContext.Provider>
  );
};

export { LocalizeToastProvider };
export default LocalizeToastProvider;
