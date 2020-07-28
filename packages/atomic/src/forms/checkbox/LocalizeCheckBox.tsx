import React from 'react';

import styled from '@emotion/styled';
import classnames from 'classnames';
import {
  LocalizeThemeProps,
  LocalizeProps,
} from '@seolhun/localize-components-styled-types';

import { LocalizeCheckBoxGroupAlignType } from './LocalizeCheckBoxGroup';

const DEFAULT_CLASSNAME = '__Localize__CheckBox';

interface LocalizeCheckBoxProps
  extends React.HTMLAttributes<HTMLInputElement>,
    LocalizeProps {
  /**
   * Set this to change CheckBox label
   */
  item: CheckBoxItemProps;

  /**
   * Set this to change Radio checked
   */
  checked: boolean;

  /**
   * Set this to change CheckBox groupName
   * @default ''
   */
  groupName?: string;

  /**
   * Set this to change CheckBox labelKey
   * @default 'label'
   */
  labelKey?: string;

  /**
   * Set this to change CheckBox onChange
   * @default () => null
   */
  onChange?: (item: CheckBoxItemProps, ...args: any[]) => void;

  /**
   * Set this to change CheckBox Group onClick
   * @default undefined
   */
  onClick?: (item: CheckBoxItemProps, ...args: any[]) => void;

  /**
   * Set this to change CheckBox onMouseOver
   * @default () => null
   */
  onMouseOver?: (...agrs: any[]) => void;

  /**
   * Set this to change CheckBox onMouseOut
   * @default () => null
   */
  onMouseOut?: (...agrs: any[]) => void;

  /**
   * Set this to change CheckBox useLabelKey
   * @default false
   */
  useLabelKey?: boolean;

  /**
   * Set this to change CheckBox valueKey
   * @default 'value'
   */
  valueKey?: string;

  /**
   * Set this to change Radio Group align
   * @default 'horizontal'
   */
  align?: LocalizeCheckBoxGroupAlignType;
}

interface CheckBoxItemProps {
  [key: string]: any;
}

interface SizeProps {
  /**
   * Set this to change Radio Group align
   * @default undefined
   */
  align?: LocalizeCheckBoxGroupAlignType;
}

const StyledCheckBoxLabel = styled.label<SizeProps>(({ align }) => {
  const getDisplayByAlign = () => {
    if (align === 'horizontal') {
      return 'inline-flex';
    }
    return 'flex';
  };
  const getWidthByAlign = () => {
    if (align === 'horizontal') {
      return 'auto';
    }
    return '100%';
  };

  return {
    display: getDisplayByAlign(),
    alignItems: 'center',
    position: 'relative',
    height: 'auto',
    width: getWidthByAlign(),
    paddingLeft: '30px',
    userSelect: 'none',
    cursor: 'pointer',

    '& + &': {
      marginLeft: '1rem',
    },
  };
});

const StyledCheckBox = styled.input({
  position: 'absolute',
  cursor: 'pointer',
  height: 0,
  width: 0,
  opacity: 0,
});

const StyledCheckMark = styled.span<LocalizeProps, LocalizeThemeProps>(
  ({ theme }) => {
    return {
      backgroundColor: theme.colors.primary,
      borderRadius: '6px',
      border: '1px solid transparent',
      display: 'inline-flex',
      height: '16px',
      justifyContent: 'flex-start',
      left: 0,
      position: 'absolute',
      transition: 'border-color 0.35s, background-color 0.35s',
      width: '16px',

      [`.${DEFAULT_CLASSNAME}:hover ~ &`]: {
        border: `1px solid ${theme.colors.neutral6}`,

        ['input:checked ~ &']: {
          backgroundColor: theme.colors.primary,
        },
      },

      [`.${DEFAULT_CLASSNAME}:checked ~ &:after`]: {
        display: 'block',
      },

      ['&::after']: {
        content: '""',
        position: 'absolute',
        display: 'none',
        border: `solid ${theme.colors.neutral6}`,
        borderWidth: '0 2px 2px 0',
        height: '8px',
        width: '4px',
        left: '5px',
        top: '2px',
        transform: 'rotate(45deg)',
      },
    };
  },
);

const LocalizeCheckBox: React.FC<LocalizeCheckBoxProps> = ({
  item,
  checked,
  // IsNotRequired
  className,
  groupName = '',
  labelKey = 'label',
  valueKey = 'value',
  onClick,
  onChange = () => null,
  onMouseOut = () => null,
  onMouseOver = () => null,
  useLabelKey = false,
  align = 'horizontal',
}) => {
  const usedKey = useLabelKey ? labelKey : valueKey;
  const handleOnChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      event.stopPropagation();
      onChange({
        [labelKey]: item[labelKey],
        [valueKey]: item[valueKey],
        checked: !checked,
      });
      if (onClick) {
        onClick({
          [labelKey]: item[labelKey],
          [valueKey]: item[valueKey],
          checked,
        });
      }
    },
    [checked, usedKey, labelKey, valueKey, item],
  );

  return (
    <StyledCheckBoxLabel
      htmlFor={item[usedKey]}
      className={classnames(`${DEFAULT_CLASSNAME}__Label`, className)}
      onMouseOut={onMouseOut}
      onMouseOver={onMouseOver}
      align={align}
    >
      {item[labelKey]}
      <StyledCheckBox
        type="checkbox"
        id={item[usedKey]}
        checked={checked}
        className={`${DEFAULT_CLASSNAME}`}
        onChange={handleOnChange}
        value={item[usedKey]}
        name={groupName || item[usedKey]}
      />
      <StyledCheckMark />
    </StyledCheckBoxLabel>
  );
};

export { LocalizeCheckBox, LocalizeCheckBoxProps };

export default LocalizeCheckBox;
