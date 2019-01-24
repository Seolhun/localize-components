import React, { PureComponent, ReactNode } from 'react';

import styled from '@emotion/styled';
import { darken, lighten } from 'polished';

import classnames from 'classnames';

import {
  FontSizes,
  ThemeConfig,
  Themes,
  ThemesType,
} from '@seolhun/localize-components-styled-types';
import {
  getIsLightenTheme,
  getValidTheme,
} from '@seolhun/localize-components-styled-utils';
import {
  ValidationResponse,
} from '@seolhun/localize-components-types';

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
   * Set this to change Button ours mainColor
   * @default ThemeConfig.MAIN_THEME = royal_blue
   */
  mainColor?: ThemesType;
  /**
   * Set this to change Button ours subColor
   * @default ThemeConfig.SUB_THEME = gray
   */
  subColor?: ThemesType;
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

export class Input extends PureComponent<InputProps, InputState> {
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
      type = 'text',
      mainColor = ThemeConfig.MAIN_THEME,
      subColor = ThemeConfig.SUB_THEME,
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
          'Localize__Input',
          className,
        )}
      >
        <StyledInputBox
          ref={this.inputBoxRef}
          className={classnames(
            'InputBox',
            {
              hasError,
              isFocused,
            },
          )}
          mainColor={mainColor}
          subColor={subColor}
          style={{
            ...style,
          }}
        >
          <StyledInput
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
            mainColor={mainColor}
            subColor={subColor}
          />
          {enterButton && (
            <StyledEnterButton
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
            </StyledEnterButton>
          )}
        </StyledInputBox>
        <StyledErrorBox
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
        </StyledErrorBox>
      </div>
    );
  }
}

export interface InputBoxProps {
  /**
   * Set this to change Button ours mainColor
   * @default ThemeConfig.MAIN_THEME = royal_blue
   */
  mainColor?: ThemesType;
  /**
   * Set this to change Button ours subColor
   * @default ThemeConfig.SUB_THEME = gray
   */
  subColor?: ThemesType;
}

const StyledInputBox = styled.div<InputBoxProps>`
  background-color: ${Themes.white};
  border-radius: 3px;
  border: 2px solid transparent;
  display: flex;
  height: 50px;
  padding: 0;
  transition: border-color 0.3s, background-color 0.3s;
  vertical-align: middle;
  width: 100%;

  &:required {
    color: ${Themes.black};
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:hover {
    border: 2px solid ${({
      mainColor = ThemeConfig.MAIN_THEME,
    }: InputBoxProps) => {
      if (getIsLightenTheme(mainColor)) {
        return darken(0.1, getValidTheme(mainColor));
      }
      return lighten(0.1, getValidTheme(mainColor));
    }};
  }

  &.isFocused {
    border: 2px solid ${({
      mainColor = ThemeConfig.MAIN_THEME,
    }: InputBoxProps) => {
      return getValidTheme(mainColor);
    }};
    color: ${({
      mainColor = ThemeConfig.MAIN_THEME,
    }: InputBoxProps) => {
      if (getIsLightenTheme(mainColor)) {
        return Themes.white;
      }
      return Themes.black;
    }};
  }
`;

const StyledInput = styled.input<InputProps>`
    background-color: transparent;
    border: 0;
    color: : ${Themes.gray};
    cursor: text;
    display: block;
    height: auto;
    line-height: 25px;
    margin: auto 10px;
    outline: none;
    padding: 0;
    white-space: nowrap;
    width: 100%;

    &::placeholder {
      font-size: 14px;
      font-weight: 300;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.90;
      letter-spacing: -0.3px;
      color: ${Themes.light_gray};
    }

    &:required {
      color: ${Themes.warning};
    }

    &:disabled {
      background-color: ${Themes.basic};
      border: 2px solid ${Themes.basic};
      cursor: not-allowed !important;
    }

    &:hover {
      color: ${Themes.black};
    }
  }
`;

const StyledEnterButton = styled.button`
  align-items: center;
  background-color: ${Themes.gray};
  border-radius: 0 3px 3px 0;
  color: ${Themes.white};
  cursor: pointer;
  display: inline-flex;
  flex-basis: 50px;
  flex-shrink: 0;
  float: right;
  height: 100%;
  justify-content: center;
  vertical-align: middle;
  width: 50px;

  &.isFilled {
    background-color: ${Themes.gray};
  }

  &.hasError {
    background-color: ${Themes.gray};
    cursor: not-allowed !important;
  }

  &:hover, &:active {
    background-color: ${Themes.gray};
  }
`;

const StyledErrorBox = styled.div`
  display: flex;
  font-size: ${FontSizes.H1}
  font-weight: 300;
  height: auto;
  min-height: 10px;
  letter-spacing: -0.2px;
  line-height: 0.90;
  margin-top: 10px;
  vertical-align: middle;
  width: 100%;
  &.hasError {
    color: ${Themes.danger}
  }
`;

export default Input;
