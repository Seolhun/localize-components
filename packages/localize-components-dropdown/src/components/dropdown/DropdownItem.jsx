import React from 'react';
import PropTypes from 'prop-types';

const setIcon = ({ radio, className }) => {
  if (!radio) {
    return null;
  }
  return className === 'on'
    ? <i className='material-icons md-13 accent1'>radio_button_checked</i>
    : <i className='material-icons md-13'>radio_button_unchecked</i>;
};

const DropdownItem = ({
  item,
  onClick,
  // isNotRequired
  className,
  labelKey,
  noDataMessage,
  radio,
  valueKey,
}) => {
  return (
    <li
      className={className}
      onClick={onClick}
    >
      {setIcon(props)}
      <span
        onClick={onClick}
        data-view-unit={item[valueKey]}
        className={`${radio ? 'ic-left' : ''}`}
      >
        {item[labelKey]
          ? item[labelKey]
          : {noDataMessage}
        }
      </span>
    </li>
  );
};

DropdownItem.propTypes = {
  item: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
  // isNotRequired
  className: PropTypes.string,
  labelKey: PropTypes.string,
  noDataMessage: PropTypes.string,
  radio: PropTypes.bool,
  valueKey: PropTypes.string,
};

DropdownItem.defaultProps = {
  className: '',
  labelKey: 'label',
  noDataMessage: 'no data...',
  radio: false,
  valueKey: 'value',
};

export default DropdownItem;
