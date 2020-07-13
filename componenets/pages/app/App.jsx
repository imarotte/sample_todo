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

import React, { useCallback, useState, useEffect } from 'react';
import Header from '../../organism/header';
import BtnDefault from '../../atoms/buttons/btnDefault';
import BtnPrimary from '../../atoms/buttons/btnPrimary';
import ListItem from '../../molecules/listItem';
import Feedback from '../../organism/feedback';
import styles from './app.scss';


/**
 * @typedef todoItem
 *
 * @property {string} id
 * @property {string} text
 * @property {boolean} isCompleted
 */

const initialList = [
  {
    text: 'Post Job',
    isCompleted: true
  },
  {
    text: 'Interview Isaac',
    isCompleted: true
  },
  {
    text: 'Offer Isaac lots of $$$',
    isCompleted: false
  }
];

let uid = -1; // so the first hit is 0

/**
 *
 * @return {number}
 */
const getUID = () => {
  uid += 1;
  return uid;
};

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [feedback, setFeedback] = useState([]);

  // initialize the list
  useEffect(() => {
    setTodoList(initialList.map((initialItem) => {
      return {
        id: getUID(),
        ...initialItem
      };
    }));
  }, []);

  /**
   *
   * @param {string} text
   */
  const addFeedback = useCallback((text) => {
    setFeedback((prevState) => {
      return prevState.concat([text]);
    });

    // set a timer to remove it
    // when this goes off, this item will be the first in the list
    setTimeout(() => {
      setFeedback((prevState) => prevState.slice(1));
    }, 5000);
  }, []);

  const logCurrentTodo = useCallback(() => {
    console.log('Database', todoList);
    addFeedback('Database logged to console');
  }, [todoList]);

  /**
   *
   * @param {Event}
   */
  const handleAddNew = useCallback((event) => {
    // setting outside setTodoList
    // the set function of useState is triggered twice in development in strict mode
    // this is done to ensure pure functions
    // https://github.com/facebook/react/issues/12856
    const id = getUID();
    setTodoList((oldList) => {
      return oldList.concat([{
        id,
        text: '',
        isCompleted: false
      }]);
    });
  }, []);


  /**
   *
   * @param {todoItem} updatedItem
   */
  const handleOnChange = useCallback((updatedItem) => {
    setTodoList((prevList) => {
      // we must make a deep copy of the previous list
      const list = prevList.slice();
      const index = list.findIndex((item) => item.id === updatedItem.id);
      list[index] = updatedItem;
      return list;
    });
  }, []);

  /**
   * remove by id
   * @param {string} id
   */
  const handleRemove = useCallback((id) => {
    setTodoList((prevList) => {
      addFeedback('Task removed');
      return prevList.filter((item) => item.id !== id);
    });
  }, []);


  return (
    <div>
      <Header />
      <article className={styles.main}>
        <ul>
          {todoList.map((item) => (
            <li key={item.id}>
              <ListItem item={item} onChange={handleOnChange} onRemove={handleRemove} />
            </li>
          ))}
        </ul>
        <div className={styles.buttons}>
          <BtnPrimary onClick={handleAddNew}>New Task</BtnPrimary>
          <BtnDefault onClick={logCurrentTodo}>Log DB</BtnDefault>
        </div>
        <Feedback data={feedback} />
      </article>
    </div>
  );
};

export default App;
