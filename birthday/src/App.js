import React, { useState } from 'react';
import List from './list';
import Data from './data';

function App() {
  const [people, setPeople] = useState(Data);
  return (
    <div className= ' flex flex-col items-center justify-center min-h-full  bg-red-200'>
      <h3 className='text-center'>{Data.length} Birthdays!!</h3>
      <List people={people} />

      <button onClick={() => setPeople([])}>Clear</button>
    </div>
  );
}

export default App;
