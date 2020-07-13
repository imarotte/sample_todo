/*
 * @Copyright © 2019-2020 Isaac Marotte - All Rights Reserved
 *
 * This file is the sole property of its owner.
 * Unauthorized use of this file, via any medium or form, whole or in part,
 * is strictly prohibited without the expressed written permission of Isaac Marotte
 *
 * This file is proprietary and confidential
 *
 * Last Modified: 2020.7.12
 */

import React from 'react';
import PropTypes from 'prop-types';
import Button from './btn';
import styles from './btnDefault.scss';

const btnDefault = ({ className, ...props }) => {
  return (
    <Button
      className={`${styles.btnDefault} ${className}`}
      {...props}
    />
  );
};

btnDefault.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func,
  tabIndex: PropTypes.number,
  className: PropTypes.string
};

btnDefault.defaultProps = {
  type: undefined,
  onKeyDown: undefined,
  className: '',
  tabIndex: undefined
};

export default btnDefault;
