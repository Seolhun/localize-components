import React from 'react';
import {
  LocalizeToastContext,
  LocalizeToastMessageProps,
} from './LocalizeToastContext';

const useLocalizeToast = () => {
  const [, dispatch] = React.useContext(LocalizeToastContext);

  const message = (toast: LocalizeToastMessageProps) => {
    dispatch({
      type: 'ADD_TOAST',
      payload: toast,
    });
  };
  return message;
};

export { useLocalizeToast };
export default useLocalizeToast;
