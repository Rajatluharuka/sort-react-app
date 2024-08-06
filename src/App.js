import React, { useState, useCallback, useMemo } from 'react';

import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';

function App() {
  const [listTitle, setListTitle] = useState('My List');
  const [isDescending, setIsDescending] = useState(false);

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  const toggleSortOrderHandler = useCallback(() => {
    setIsDescending((prev) => !prev);
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} isDescending={isDescending} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={toggleSortOrderHandler}>
        {isDescending ? 'Change to Ascending Order' : 'Change to Descending Order'}
      </Button>
    </div>
  );
}

export default App;
