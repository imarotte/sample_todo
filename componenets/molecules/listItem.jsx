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

import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Btn from '../atoms/buttons/btn';
import IconCheckboxChecked from '../atoms/icons/iconCheckboxChecked';
import IconCheckboxUnchecked from '../atoms/icons/iconCheckboxUnchecked';
import styles from './listItem.scss';

/**
 * @typedef listItem
 *
 * @property {number} id
 * @property {string} text
 * @property {string} isCompleted
 */

/**
 *
 * @param {listItem} item
 * @param {function} onChange
 * @param {function} onRemove
 * @return {JSX.Element}
 */
const listItem = ({ item, onChange, onRemove }) => {
  const {
    id,
    isCompleted,
    text
  } = item;

  /**
   *
   */
  const toggleCompleted = useCallback(() => {
    onChange({
      id: item.id,
      text: item.text,
      isCompleted: !item.isCompleted
    });
  }, [item, onChange]);


  const handleRemove = useCallback(() => {
    onRemove(id);
  }, [id, onRemove]);

  /**
   *
   * @param {Event} event
   */
  const handleOnTextChange = useCallback((event) => {
    onChange({
      ...item,
      text: event.target.value
    });
  }, [item, onChange]);

  return (
    <div className={styles.item}>
      <Btn onClick={toggleCompleted}>
        {
          isCompleted
            ? <IconCheckboxChecked className={styles.icon} />
            : <IconCheckboxUnchecked className={styles.icon} />
        }
      </Btn>
      <textarea value={text} onChange={handleOnTextChange} placeholder="New Task..." />
      <Btn className={styles.remove} onClick={handleRemove}>
        X
      </Btn>
    </div>
  );
};

listItem.propTypes = {
  onChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  item: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    isCompleted: PropTypes.bool
  }).isRequired
};

export default listItem;
