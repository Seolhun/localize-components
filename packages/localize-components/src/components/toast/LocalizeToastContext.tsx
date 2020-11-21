import React from 'react';

import { LocalizeThemeProps } from '@seolhun/localize-components-styled-types';
import { LocalizeIconProps } from '@seolhun/localize-components-icon';

export interface LocalizeToastMessageProps {
  /**
   * To notify title
   */
  title: string;

  /**
   * message background color
   */
  type?: keyof LocalizeThemeProps['colors'];

  /**
   * To notify message
   */
  message?: string;

  /**
   * @default undefined
   */
  icon?: LocalizeIconProps['icon'];
}

export interface LocalizeToastMessageUKProps extends LocalizeToastMessageProps {
  id: string;

  visible: boolean;
}

export type LocalizeToastDispatchActionNameType = 'ADD_TOAST' | 'REMOVE_TOAST' | 'RESET_TOASTS';
export type LocalizeToastDispatchActionType = {
  type: LocalizeToastDispatchActionNameType;
  payload?: any;
};
export type LocalizeToastDispatchType = (action: LocalizeToastDispatchActionType) => void;
export type LocalizeToastContextProps = [LocalizeToastMessageUKProps[], LocalizeToastDispatchType];

const LocalizeToastContext = React.createContext<LocalizeToastContextProps>([[], () => null]);

export { LocalizeToastContext };
export default LocalizeToastContext;
