import React, { PureComponent, ReactNode } from 'react';

import styled from '@emotion/styled';
import classnames from 'classnames';

import {
  FontSizes,
  LocalizeThemes,
  ILocalizeTheme,
  LocalizeBaseStyledProps,
} from '@seolhun/localize-components-styled-types';
import {
  getValidThemeObject,
  getThemeColorStyle,
  getThemeHoverStyle,
} from '@seolhun/localize-components-styled-utils';
import { ValidationResponse } from '@seolhun/localize-components-types';

const DEFAULT_CLASSNAME = '__Localize__Input'

export interface LocalizeInputProps extends React.InputHTMLAttributes<HTMLInputElement>, LocalizeBaseStyledProps {
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
   * @default undefined
   */
  className?: string;
  /**
   * Set this to change Input onSubmit
   * @default undefined
   */
  onSubmit?: (...args: any[]) => void;
  /**
   * Set this to change Input font-size
   * @default 12
   */
  fontSize?: number;
  /**
   * Set this to change Input message
   * @default ''
   */
  message?: string;
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

const StyledInputBox = styled.div<LocalizeBaseStyledProps, ILocalizeTheme>(({
  theme,
  ...props
}) => {
  const validTheme = getValidThemeObject(props, theme);

  return {
    display: 'flex',
    verticalAlign: 'middle',
    width: '100%',
    height: '40px',
    backgroundColor: validTheme.subColor,
    borderRadius: '6px',
    border: `2px solid ${LocalizeThemes.light_grey}`,
    padding: 0,
    transition: 'border-color 0.3s, background-color 0.3s',

    [`&:disabled`]: {
      cursor: 'not-allowed',
    },

    [`&:hover`]: {
      border: `2px solid ${getThemeHoverStyle(validTheme.mainColor)}`,
    },

    [`&.isFocused`]: {
      border: `2px solid ${validTheme.mainColor}`,
    },
  }
})

const StyledDivInput = styled.div<LocalizeInputProps, ILocalizeTheme>(({
  fontSize = 12,
  theme,
  ...props
}) => {
  const validTheme = getValidThemeObject(props, theme);
  return {
    appearance: 'textfield',
    display: 'block',
    height: 'auto',
    width: '100%',
    margin: 'auto 10px',
    backgroundColor: LocalizeThemes.transparent,
    border: 0,
    padding: 0,
    fontSize: `${fontSize}px`,
    color: getThemeColorStyle(validTheme.subColor),
    cursor: 'text',
    lineHeight: '25px',
    outline: 'none',
    whiteSpace: 'nowrap',

    [`&:empty:before`]: {
      content: `attr(data-placeholder)`,
      fontSize: `${FontSizes.H5}`,
      fontWeight: 300,
      fontStyle: 'normal',
      fontStretch: 'normal',
      lineHeight: 1.9,
      letterSpacing: '-0.3px',
      color: getThemeColorStyle(validTheme.subColor),
    },
    [`&:required`]: {
      color: `${LocalizeThemes.warning}`,
    },

    [`&:disabled`]: {
      backgroundColor: `${LocalizeThemes.light_grey}`,
      border: `1px solid ${LocalizeThemes.light_grey}`,
      cursor: `not-allowed !important`,
    },
  }
})

const StyledInput = styled.input<LocalizeInputProps, ILocalizeTheme>(({
  theme,
  ...props
}) => {
  const validTheme = getValidThemeObject(props, theme);

  return {
    display: 'none',
    height: 'auto',
    width: '100%',
    backgroundColor: 'transparent',
    border: 0,
    color: getThemeColorStyle(validTheme.subColor),
    lineHeight: '25px',
    margin: 'auto 10px',
    padding: 0,


    cursor: 'text',
    outline: 'none',
    whiteSpace: 'nowrap',

    [`&::placeholder`]: {
      fontSize: `${FontSizes.H5}`,
      fontWeight: 300,
      fontStyle: 'normal',
      fontStretch: 'normal',
      lineHeight: 1.9,
      letterSpacing: '-0.3px',
      color: LocalizeThemes.light_grey,
    },

    [`&:required`]: {
      color: `${LocalizeThemes.warning}`,
    },

    [`&:disabled`]: {
      backgroundColor: `${LocalizeThemes.light_grey}`,
      border: `1px solid ${LocalizeThemes.light_grey}`,
      cursor: `not-allowed !important`,
    },
  }
})

const StyledEnterButton = styled.button({
  alignItems: 'center',
  backgroundColor: `${LocalizeThemes.grey}`,
  borderRadius: '0 6px 6px 0',
  color: `${LocalizeThemes.white}`,

  display: 'inline-flex',
  flexBasis: '50px',
  width: '50px',
  flexShrink: 0,
  height: '100%',
  justifyContent: 'center',
  verticalAlign: 'middle',

  float: 'right',
  cursor: 'pointer',

  [`&.${DEFAULT_CLASSNAME}__EnterButton__IsFilled`]: {
    backgroundColor: `${LocalizeThemes.grey}`,
  },
  [`&.${DEFAULT_CLASSNAME}__EnterButton__HasError`]: {
    backgroundColor: `${LocalizeThemes.grey}`,
    cursor: 'not-allowed !important',
  },
  [`&:hover, &:active`]: {
    backgroundColor: `${LocalizeThemes.grey}`,
  },
})

const StyledErrorBox = styled.div({
  display: 'flex',
  verticalAlign: 'middle',
  minHeight: '10px',
  height: 'auto',
  width: '100%',
  marginTop: '10px',

  fontSize: `${FontSizes.H1}`,
  fontWeight: 300,
  letterSpacing: '-0.2px',
  lineHeight: 0.90,

  [`&.${DEFAULT_CLASSNAME}__ErrorBox__HasError`]: {
    color: `${LocalizeThemes.danger}`,
  },
})

export class LocalizeInput extends PureComponent<LocalizeInputProps, InputState> {
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

  handleIsFocused = (event: React.FocusEvent<HTMLInputElement>) => {
    const { onFocus } = this.props;

    this.setState({
      isFocused: true,
    });
    if (onFocus) {
      onFocus(event);
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
      this.setState({
        isFocused: true,
      });
      this.inputRef.current.focus();
    }
  };

  render() {
    const {
      value,
      name,
      className,
      disabled = false,
      fontSize = 12,
      enterButton = null,
      placeholder = '',
      required = false,
      type = 'text',
      css = {},
      ...props
    }: LocalizeInputProps = this.props;
    const { hasError, isFilled, isFocused, message }: InputState = this.state;

    return (
      <div className={classnames(DEFAULT_CLASSNAME, className)}>
        <StyledInputBox
          {...props}
          ref={this.inputBoxRef}
          className={classnames({
            hasError,
            isFocused,
          })}
          css={css}
        >
          <StyledDivInput
            {...props}
            ref={this.inputRef}
            name={name}
            disabled={disabled}
            onBlur={this.handleOnBlur}
            onChange={this.handleOnChange}
            onFocus={this.handleIsFocused}
            onKeyDown={this.handleOnKeyDown}
            fontSize={fontSize}
            required={required}
            type={type}
            value=''
            data-placeholder={placeholder}
            dangerouslySetInnerHTML={this.handleRenderValue(value)}
            contentEditable
          />
          <StyledInput
            {...props}
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
          />
          {enterButton && (
            <StyledEnterButton
              className={classnames(
                {
                  [`${DEFAULT_CLASSNAME}__EnterButton__HasError`]: hasError,
                  [`${DEFAULT_CLASSNAME}__EnterButton__IsFilled`]: isFilled && !hasError,
                }
              )}
              onClick={this.handleOnSubmit}
            >
              {enterButton}
            </StyledEnterButton>
          )}
        </StyledInputBox>
        <StyledErrorBox
          className={classnames(`${DEFAULT_CLASSNAME}__ErrorBox`, {
            [`${DEFAULT_CLASSNAME}__ErrorBox__HasError`]: hasError,
          })}
        >
          {hasError && `*${message}`}
        </StyledErrorBox>
      </div>
    );
  }
}

export default LocalizeInput;
