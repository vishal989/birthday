import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTours = (id) => {
    const newTours = tours.filter((tour) => id !== tour.id)
    setTours(newTours);
  }

  const f = async () => {
    setLoading(true);
    try {
      const data = await fetch(url);
      const res = await data.json();
      console.log(res);
      setTours(res);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    f();
  }, []);

  if(tours.length === 0){
    return <main>
      <div className='title'>
        <h2>no tours left</h2>
        <button className='btn' onClick={() => f()}>Refresh</button>
      </div>
    </main>
  }

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return <main>
    <Tours tours = {tours} removeTours={removeTours} />
  </main>;
}

export default App;
