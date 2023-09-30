import React from 'react';
import Tour from './Tour';
const Tours = ({tours, removeTours}) => {
  return (
    <main>
      {tours.map((tour) => {
        return <Tour key = {tour.id} tour={tour} removeTours={removeTours} />;
      })}
    </main>
  );
};

export default Tours;
