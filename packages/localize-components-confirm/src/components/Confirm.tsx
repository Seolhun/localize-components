import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import {
  Button,
} from '@seolhun/localize-components-button';
import {
  INPUT_TYPE,
  INPUT_STYLE_TYPE,
} from '@seolhun/localize-components-form';
import {
  LocalizeColor,
  LocalizeColorType,
  LocalizePosition,
  LocalizePositionType,
} from '@seolhun/localize-components-types';
import {
  SetStyleUtils
} from '@seolhun/localize-components-utils';

import { BasicConfirm, InputConfirm } from './child';

const styles = require('./Confirm.css');

export interface ConfirmProps {
  htmlFor: string;
  onClickClose: (...args: any[]) => any;
  onClickSubmit: (...args: any[]) => any;
  value: string;
  // isNotRequired
  cancelLabel?: string;
  children?: React.ReactNode;
  className?: string | undefined;
  color?: LocalizeColorType;
  errorMessage?: string;
  inputType?: string;
  isShow?: boolean;
  message?: string;
  onBlur?: (...args: any[]) => any;
  onChange: (...args: any[]) => any;
  onKeyDown?: (...args: any[]) => any;
  placeholder?: string;
  position?: LocalizePositionType;
  required?: boolean;
  inputStyleType?: string;
  submitIsDisabled?: boolean;
  submitLabel?: string;
  title?: string;
  type?: ConfirmType;
}

export type ConfirmType = 'basic' | 'input' | 'select' | 'checkbox';
const ConfirmTypes = {
  BASIC: 'basic',
  INPUT: 'input',
  SELECT: 'select',
  CHECKBOX: 'checkbox',
};

class Confirm extends React.Component<ConfirmProps> {
  static propTypes = {
    htmlFor: PropTypes.string.isRequired,
    onClickClose: PropTypes.func.isRequired,
    onClickSubmit: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    // isNotRequired
    cancelLabel: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    color: PropTypes.string,
    errorMessage: PropTypes.string,
    inputStyleType: PropTypes.string,
    inputType: PropTypes.string,
    isShow: PropTypes.bool,
    message: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onKeyDown: PropTypes.func,
    placeholder: PropTypes.string,
    position: PropTypes.string,
    required: PropTypes.bool,
    submitIsDisabled: PropTypes.bool,
    submitLabel: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
  };

  static defaultProps = {
    cancelLabel: 'Cancel',
    children: null,
    className: '',
    color: LocalizeColor.BASIC,
    errorMessage: 'Error',
    inputStyleType: INPUT_STYLE_TYPE.BOX,
    inputType: INPUT_TYPE.SEARCH,
    isShow: false,
    message: '',
    onBlur: () => null,
    onChange: () => null,
    onKeyDown: () => null,
    placeholder: '',
    position: LocalizePosition.CENTER,
    required: false,
    submitIsDisabled: false,
    submitLabel: 'Complete',
    title: '',
    type: ConfirmTypes.BASIC,
  };

  constructor(props) {
    super(props);
  }

  renderByType(type) {
    switch (type) {
      case ConfirmTypes.INPUT:
        return <InputConfirm {...this.props} />;
      default:
        return <BasicConfirm {...this.props} />;
    }
  }

  render() {
    const {
      onClickClose,
      onClickSubmit,
      // isNotRequired
      cancelLabel = 'Cancel',
      children = null,
      className = '',
      color = LocalizeColor.BASIC,
      isShow = false,
      position = LocalizePosition.CENTER,
      submitIsDisabled = false,
      submitLabel = 'Complete',
      title = '',
      type = ConfirmTypes.BASIC,
    } = this.props;

    if (!isShow) {
      return null;
    }
    return (
      <React.Fragment>
        <div className={styles.coverBackground} />
        <div
          className={classnames(`
          ${styles.Confirm}
          ${className}
          ${SetStyleUtils.setColor(styles, color)}
          ${SetStyleUtils.setPosition(styles, position)}
        `)}
        >
          <div className={styles.headerDiv}>{title}</div>
          <div className={styles.bodyDiv}>
            {children || this.renderByType(type)}
          </div>
          <div className={styles.footerDiv}>
            <Button
              className="btn btn-success"
              onClick={(event) => {
                if (!submitIsDisabled) {
                  onClickSubmit(event);
                }
              }}
              disabled={submitIsDisabled}
            >
              {submitLabel}
            </Button>
            <Button className="btn btn-warning" onClick={onClickClose}>
              {cancelLabel}
            </Button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Confirm;
