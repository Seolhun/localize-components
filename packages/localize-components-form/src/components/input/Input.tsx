import React, { PureComponent, ReactNode } from 'react';

import classnames from 'classnames';

import {
  getThemeStyle,
} from '@seolhun/localize-components-styled-utils';
import {
  BrandTheme,
  ThemeStyle,
  ThemeStyleType,
  ThemeType,
  ValidationResponse,
} from '@seolhun/localize-components-types';

import './Input.css';

export interface InputProps {
  // isRequired
  /**
   * Set this to change Input rendering children node
   * @default ''
   */
  value: string;

  // isNotRequired
  /**
   * Set this to change Input autoFocus
   * @default false
   */
  autoFocus?: boolean;
  /**
   * Set this to change Input className
   * @default ''
   */
  className?: string;
  /**
   * Set this to change Input ours main disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * Set this to change Input font-size
   * @default 12
   */
  fontSize?: number;
  /**
   * Set this to change Input htmlFor
   * @default ''
   */
  htmlFor?: string;
  /**
   * Set this to change Input message
   * @default ''
   */
  message?: string;
  /**
   * Set this to change Input onBlur
   * @default 'main'
   */
  onBlur?: (...args: any[]) => void;
  /**
   * Set this to change Input onChange
   * @default undefined
   */
  onChange?: (...args: any[]) => void;
  /**
   * Set this to change Input onFocus
   * @default undefined
   */
  onFocus?: (...args: any[]) => void;
  /**
   * Set this to change Input onSubmit
   * @default undefined
   */
  onSubmit?: (...args: any[]) => void;
  /**
   * Set this to change Input onChange
   * @default undefined
   */
  onValidation?: (...args: any[]) => ValidationResponse;
  /**
   * Set this to change Input rendering enterButton node
   * @default null
   */
  enterButton?: ReactNode;
  /**
   * Set this to change Input placeholder
   * @default ''
   */
  placeholder?: string;
  /**
   * Set this to change Input required
   * @default false
   */
  required?: boolean;
  /**
   * Set this to change Input style
   * @default {}
   */
  style?: {};
  /**
   * Set this to change Input ours theme type
   * @default 'background'
   */
  themeType?: ThemeStyleType;
  /**
   * Set this to change Input ours theme
   * @default 'main'
   */
  theme?: ThemeType;
  /**
   * Set this to change Input type
   * @default 'text'
   */
  type?: string;
  /**
   * Set this to change Input useEnter
   * @default true
   */
  useEnter?: boolean;
}

export interface InputState {
  hasError: boolean;
  isFilled: boolean;
  isFocused: boolean;
  message: string;
}

class Input extends PureComponent<InputProps, InputState> {
  private inputBoxRef: any;
  private inputRef: any;

  constructor(props) {
    super(props);
    this.state = {
      hasError: !!props.hasError,
      isFilled: false,
      isFocused: false,
      message: props.message,
    };
    this.inputBoxRef = React.createRef();
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    const {
      autoFocus,
    } = this.props;

    if (autoFocus) {
      this.initFocusTextInput();
    }
  }

  handleOnBlur = (event) => {
    const {
      onBlur,
    } = this.props;

    this.setState({
      isFocused: false,
    });
    if (onBlur) {
      onBlur(event);
    }
  }

  handleOnChange = (event) => {
    const {
      onChange,
    } = this.props;

    if (onChange) {
      onChange(event);
    }
    this.handleOnValidation(event);
  }

  handleOnKeyDown = ({ key }) => {
    const { useEnter = true } = this.props;

    if (useEnter && key === 'Enter') {
      this.handleOnSubmit();
    }
  }

  handleOnSubmit = () => {
    const {
      onSubmit,
    } = this.props;
    const {
      hasError,
    } = this.state;

    if (!hasError && onSubmit) {
      onSubmit();
    }
  }

  handleOnValidation = (event) => {
    const {
      onValidation,
    } = this.props;

    if (event.target.value) {
      this.setState({
        isFilled: !!event.target.value,
      });
    }

    if (onValidation) {
      const { hasError, message } = onValidation(event);
      this.setState({
        hasError,
        message,
      });
    }
  }

  handleIsFocused = () => {
    const {
      onFocus,
    } = this.props;

    this.setState({
      isFocused: true,
    });
    if (onFocus) {
      onFocus();
    }
  }

  initFocusTextInput = () => {
    if (this.inputRef) {
      this.handleIsFocused();
      this.inputRef.current.focus();
    }
  }

  render() {
    const {
      value,
      // is Not Required
      className = '',
      disabled = false,
      fontSize = 12,
      enterButton = null,
      placeholder = '',
      required = false,
      style = {},
      themeType = ThemeStyle.Outline,
      theme = BrandTheme.BRAND_MAIN,
      type = 'text',
    }: InputProps = this.props;
    const {
      hasError,
      isFilled,
      isFocused,
      message,
    }: InputState = this.state;

    return (
      <div
        className={classnames(
          '__Localize',
          className,
        )}
      >
        <div
          ref={this.inputBoxRef}
          className={classnames(
            'InputBox',
            {
              hasError,
              isFocused,
              [getThemeStyle(theme, { themeType })]: isFocused,
            },
          )}
          style={{
            ...style,
          }}
        >
          <input
            ref={this.inputRef}
            disabled={disabled}
            onBlur={this.handleOnBlur}
            onChange={this.handleOnChange}
            onFocus={this.handleIsFocused}
            onKeyDown={this.handleOnKeyDown}
            placeholder={placeholder}
            required={required}
            style={{
              fontSize: `${fontSize}px`,
            }}
            type={type}
            value={value}
          />
          {enterButton && (
            <div
              className={classnames(
                {
                  hasError,
                  isFilled: isFilled && !hasError,
                },
                'InputEnterButton',
              )}
              onClick={this.handleOnSubmit}
            >
              {enterButton}
            </div>
          )}
        </div>
        <div
          className={classnames(
            'ErrorBox',
            {
              hasError,
            },
          )}
        >
          {hasError && (
            `*${message}`
          )}
        </div>
      </div>
    );
  }
}

export default Input;
