import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

const setIcon = (prop) => {
  const { radio, className } = prop;
  if (!radio) {
    return null;
  }
  return className === 'on'
    ? <i className='material-icons md-13 accent1'>radio_button_checked</i>
    : <i className='material-icons md-13'>radio_button_unchecked</i>;
};

const DropdownItem = (props) => {
  const {
    viewUnit,
    className,
    item,
    onClick,
    radio,
  } = props;
  return (
    <li
      className={className}
      onClick={onClick}
      data-view-unit={viewUnit.toString()}
    >
      {setIcon(props)}
      <span
        onClick={onClick}
        data-view-unit={viewUnit.toString()}
        className={`${radio ? 'ic-left' : ''}`}
      >
        {typeof item === 'string'
          ? item
          : <FormattedMessage {...item} />
        }
      </span>
    </li>
  );
};

DropdownItem.propTypes = {
  className: PropTypes.string,
  viewUnit: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  item: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
  radio: PropTypes.bool,
};

DropdownItem.defaultProps = {
  className: '',
  radio: false,
};

export default DropdownItem;
