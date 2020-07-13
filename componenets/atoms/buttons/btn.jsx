/*
 * @Copyright © 2019-2020 Isaac Marotte - All Rights Reserved
 *
 * This file is the sole property of its owner.
 * Unauthorized use of this file, via any medium or form, whole or in part,
 * is strictly prohibited without the expressed written permission of Isaac Marotte
 *
 * This file is proprietary and confidential
 *
 * Last Modified: 2020.7.10
 */

import React from 'react';
import PropTypes from 'prop-types';

// it complains that "type" isn't a valid option for type
/* eslint-disable react/button-has-type */

const btn = ({ children, className, onClick, onKeyDown, tabIndex, type }) => {
  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      onKeyDown={onKeyDown}
      tabIndex={tabIndex}
    >
      {children}
    </button>
  );
};

btn.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func,
  className: PropTypes.string,
  tabIndex: PropTypes.number
};

btn.defaultProps = {
  type: 'button',
  onKeyDown: undefined,
  className: undefined,
  tabIndex: 0
};

export default btn;
