import React, { PureComponent, ReactNode } from 'react';

import styled from '@emotion/styled';
import { darken, lighten } from 'polished';

import classnames from 'classnames';

import {
  FontSizes,
  LocalizeStyledProps,
  LocalizeTheme,
  Themes,
  LocalizeThemesType,
} from '@seolhun/localize-components-styled-types';
import {
  getIsLightenTheme,
  getValidTheme,
} from '@seolhun/localize-components-styled-utils';
import { ValidationResponse } from '@seolhun/localize-components-types';

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
   * Set this to change Input main disabled
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
   * Set this to change Input css
   * @default {}
   */
  css?: {};
  /**
   * Set this to change Input mainColor
   * @default LocalizeTheme.primaryColor = royal_blue
   */
  mainColor?: LocalizeThemesType;
  /**
   * Set this to change Input subColor
   * @default LocalizeTheme.secondaryColor = grey
   */
  subColor?: LocalizeThemesType;
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
  /**
   * Set this to change Input useEnter
   * @default (value) => value,
   */
  renderValue?: (value: string) => string;
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
    const { autoFocus } = this.props;

    if (autoFocus) {
      this.initFocusTextInput();
    }
  }

  handleOnBlur = (event) => {
    const { onBlur } = this.props;

    this.setState({
      isFocused: false,
    });
    if (onBlur) {
      onBlur(event);
    }
  };

  handleOnChange = (event) => {
    const { onChange } = this.props;

    if (onChange) {
      onChange(event);
    }
    this.handleOnValidation(event);
  };

  handleOnKeyDown = ({ key }) => {
    const { useEnter = true } = this.props;

    if (useEnter && key === 'Enter') {
      this.handleOnSubmit();
    }
  };

  handleOnSubmit = () => {
    const { onSubmit } = this.props;
    const { hasError } = this.state;

    if (!hasError && onSubmit) {
      onSubmit();
    }
  };

  handleOnValidation = (event) => {
    const { onValidation } = this.props;

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
  };

  handleIsFocused = () => {
    const { onFocus } = this.props;

    this.setState({
      isFocused: true,
    });
    if (onFocus) {
      onFocus();
    }
  };

  handleRenderValue = (value) => {
    const { renderValue } = this.props;

    if (renderValue) {
      return {
        __html: renderValue(value),
      };
    }
    return {
      __html: value,
    };
  };

  initFocusTextInput = () => {
    if (this.inputRef) {
      this.handleIsFocused();
      this.inputRef.current.focus();
    }
  };

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
      css = {},
      type = 'text',
      mainColor = LocalizeTheme.primaryColor,
      subColor = LocalizeTheme.secondaryColor,
    }: InputProps = this.props;
    const { hasError, isFilled, isFocused, message }: InputState = this.state;

    return (
      <div className={classnames('__Localize__', className)}>
        <StyledInputBox
          ref={this.inputBoxRef}
          className={classnames({
            hasError,
            isFocused,
          })}
          mainColor={mainColor}
          subColor={subColor}
          css={css}
        >
          <StyledDivInput
            ref={this.inputRef}
            disabled={disabled}
            onBlur={this.handleOnBlur}
            onChange={this.handleOnChange}
            onFocus={this.handleIsFocused}
            onKeyDown={this.handleOnKeyDown}
            fontSize={fontSize}
            required={required}
            type={type}
            value=""
            mainColor={mainColor}
            subColor={subColor}
            // Customed
            contentEditable
            data-placeholder={placeholder}
            dangerouslySetInnerHTML={this.handleRenderValue(value)}
          ></StyledDivInput>
          <StyledInput
            ref={this.inputRef}
            disabled={disabled}
            onBlur={this.handleOnBlur}
            onChange={this.handleOnChange}
            onFocus={this.handleIsFocused}
            onKeyDown={this.handleOnKeyDown}
            placeholder={placeholder}
            required={required}
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
                'InputEnterButton'
              )}
              onClick={this.handleOnSubmit}
            >
              {enterButton}
            </StyledEnterButton>
          )}
        </StyledInputBox>
        <StyledErrorBox
          className={classnames('ErrorBox', {
            hasError,
          })}
        >
          {hasError && `*${message}`}
        </StyledErrorBox>
      </div>
    );
  }
}

const StyledInputBox = styled.div<LocalizeStyledProps>`
  background-color: ${({ subColor = LocalizeTheme.secondaryColor }) => {
    return getValidTheme(subColor);
  }};
  border-radius: 6px;
  border: 2px solid ${Themes.light_grey};
  display: flex;
  height: 40px;
  padding: 0;
  transition: border-color 0.3s, background-color 0.3s;
  vertical-align: middle;
  width: 100%;

  &:disabled {
    cursor: not-allowed;
  }

  &:hover {
    border: 2px solid
      ${({ mainColor = LocalizeTheme.primaryColor }) => {
        if (getIsLightenTheme(mainColor)) {
          return darken(0.1, getValidTheme(mainColor));
        }
        return lighten(0.1, getValidTheme(mainColor));
      }};
  }

  &.isFocused {
    border: 2px solid
      ${({ mainColor = LocalizeTheme.primaryColor }) => {
        return getValidTheme(mainColor);
      }};
  }
`;

const StyledDivInput = styled.div<InputProps>`
  -moz-appearance: textfield;
  -webkit-appearance: textfield;
  background-color: transparent;
  border: 0;
  color: ${({ subColor = LocalizeTheme.secondaryColor }) => {
    if (getIsLightenTheme(subColor)) {
      return Themes.dark_grey;
    }
    return Themes.white;
  }};
  cursor: text;
  display: block;
  font-size: ${({ fontSize = 12 }) => `${fontSize}px`};
  height: auto;
  line-height: 25px;
  margin: auto 10px;
  outline: none;
  padding: 0;
  white-space: nowrap;
  width: 100%;

  &:empty:before {
    content: attr(data-placeholder);
    font-size: ${FontSizes.H5};
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.9;
    letter-spacing: -0.3px;
    color: ${({ subColor = LocalizeTheme.secondaryColor }) => {
      if (getIsLightenTheme(subColor)) {
        return lighten(0.4, Themes.dark_grey);
      }
      return lighten(0.1, Themes.light_grey);
    }};
  }

  &:required {
    color: ${Themes.warning};
  }

  &:disabled {
    background-color: ${Themes.light_grey};
    border: 1px solid ${Themes.light_grey};
    cursor: not-allowed !important;
  }
`;

const StyledInput = styled.input<InputProps>`
  background-color: transparent;
  border: 0;
  color: ${({ subColor = LocalizeTheme.secondaryColor }) => {
    if (getIsLightenTheme(subColor)) {
      return Themes.dark_grey;
    }
    return Themes.white;
  }};
  cursor: text;
  display: none;
  height: auto;
  line-height: 25px;
  margin: auto 10px;
  outline: none;
  padding: 0;
  white-space: nowrap;
  width: 100%;

  &::placeholder {
    font-size: ${FontSizes.H5};
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.9;
    letter-spacing: -0.3px;
    color: ${lighten(0.1, Themes.light_grey)};
  }

  &:required {
    color: ${Themes.warning};
  }

  &:disabled {
    background-color: ${Themes.light_grey};
    border: 1px solid ${Themes.light_grey};
    cursor: not-allowed !important;
  }
`;

const StyledEnterButton = styled.button`
  align-items: center;
  background-color: ${Themes.grey};
  border-radius: 0 6px 6px 0;
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
    background-color: ${Themes.grey};
  }

  &.hasError {
    background-color: ${Themes.grey};
    cursor: not-allowed !important;
  }

  &:hover,
  &:active {
    background-color: ${Themes.grey};
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
