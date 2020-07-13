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
import styles from './feedback.scss';

const feedback = ({ data }) => {
  return (
    <ul className="feedback">
      {
        data.map((text, index) => {
          // eslint-disable-next-line react/no-array-index-key
          return <li key={index} className={styles.feedback}>{text}</li>;
        })
      }
    </ul>
  );
};

feedback.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired
};

feedback.defaultProps = {
  data: []
};

export default feedback;
