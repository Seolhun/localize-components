import React from 'react';

import styled from '@emotion/styled';
import classnames from 'classnames';
import {
  LocalizeThemeProps,
  LocalizeProps,
} from '@seolhun/localize-components-styled-types';

const DEFAULT_CLASSNAME = '__Localize__Input';
type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export interface LocalizeInputProps extends LocalizeProps, InputProps {
  /**
   * Set this to change Input rendering children node
   * @default ''
   */
  value: string;

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
  onValidation?: (
    ...args: any[]
  ) => {
    hasError: boolean;
    message: string;
  };

  /**
   * Set this to change Input rendering enterButton node
   * @default null
   */
  enterButton?: React.ReactNode;

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

const StyledInputBox = styled.div<LocalizeProps, LocalizeThemeProps>(
  ({ theme }) => {
    return {
      display: 'flex',
      verticalAlign: 'middle',
      width: '100%',
      height: '40px',
      backgroundColor: theme.colors.primaryBackground01,
      borderRadius: '6px',
      border: `2px solid ${theme.colors.uiColor07}`,
      padding: 0,
      transition: 'border-color 0.3s, background-color 0.3s',

      ['&:disabled']: {
        cursor: 'not-allowed',
      },

      ['&:hover, &.isFocused']: {
        border: `2px solid ${theme.colors.primary01}`,
      },
    };
  },
);

const StyledDivInput = styled.div<LocalizeInputProps, LocalizeThemeProps>(
  ({ fontSize = 12, theme }) => {
    return {
      appearance: 'textfield',
      display: 'block',
      height: 'auto',
      width: '100%',
      margin: 'auto 10px',
      backgroundColor: 'transparent',
      border: 0,
      padding: 0,
      fontSize: `${fontSize}px`,
      color: theme.colors.uiColor06,
      cursor: 'text',
      lineHeight: '25px',
      outline: 'none',
      whiteSpace: 'nowrap',

      ['&:empty:before']: {
        ...theme.fonts.p.fontSize,
        content: 'attr(data-placeholder)',
        color: theme.colors.primary02,
      },

      ['&:required']: {
        color: `${theme.colors.error}`,
      },

      ['&:disabled']: {
        backgroundColor: `${theme.colors.uiColor07}`,
        border: `1px solid ${theme.colors.uiColor07}`,
        cursor: 'not-allowed !important',
      },
    };
  },
);

const StyledInput = styled.input<LocalizeInputProps, LocalizeThemeProps>(
  ({ theme }) => {
    return {
      display: 'none',
      height: 'auto',
      width: '100%',
      backgroundColor: 'transparent',
      border: 0,
      color: theme.colors.primary02,
      lineHeight: '25px',
      margin: 'auto 10px',
      padding: 0,

      cursor: 'text',
      outline: 'none',
      whiteSpace: 'nowrap',

      ['&::placeholder']: {
        ...theme.fonts.p.fontSize,
        color: theme.colors.uiColor07,
      },

      ['&:required']: {
        color: `${theme.colors.error}`,
      },

      ['&:disabled']: {
        backgroundColor: `${theme.colors.uiColor07}`,
        border: `1px solid ${theme.colors.uiColor07}`,
        cursor: 'not-allowed !important',
      },
    };
  },
);

const StyledEnterButton = styled.button<{}, LocalizeThemeProps>(({ theme }) => {
  return {
    alignItems: 'center',
    backgroundColor: `${theme.colors.uiColor07}`,
    borderRadius: '0 6px 6px 0',
    color: `${theme.colors.uiColor08}`,

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
      backgroundColor: `${theme.colors.uiColor07}`,
    },
    [`&.${DEFAULT_CLASSNAME}__EnterButton__HasError`]: {
      backgroundColor: `${theme.colors.uiColor07}`,
      cursor: 'not-allowed !important',
    },
    ['&:hover, &:active']: {
      backgroundColor: `${theme.colors.uiColor07}`,
    },
  };
});

const StyledErrorBox = styled.div<{}, LocalizeThemeProps>(({ theme }) => {
  return {
    ...theme.fonts.p.fontSize,
    display: 'flex',
    verticalAlign: 'middle',
    minHeight: '10px',
    height: 'auto',
    width: '100%',
    marginTop: '10px',

    [`&.${DEFAULT_CLASSNAME}__ErrorBox__HasError`]: {
      color: `${theme.colors.error}`,
    },
  };
});

export class LocalizeInput extends React.PureComponent<
  LocalizeInputProps,
  InputState
> {
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
            value=""
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
              className={classnames({
                [`${DEFAULT_CLASSNAME}__EnterButton__HasError`]: hasError,
                [`${DEFAULT_CLASSNAME}__EnterButton__IsFilled`]:
                  isFilled && !hasError,
              })}
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
