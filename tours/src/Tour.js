import React, { useState } from 'react';

const Tour = ({ tour, removeTours }) => {
  const [readMore, setReadMore] = useState(true);
  return (
    <article className="single-tour">
      <img src={tour.image} alt={tour.name} />
      <footer>
        <div className="tour-info">
          <h4>{tour.name}</h4>
          <h4 className="tour-price">${tour.price}</h4>
        </div>
        <p>
          {readMore ? `${tour.info.substring(0, 200)}...` : tour.info}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'read more' : 'show less'}
          </button>
        </p>
        <button className='delete-btn' onClick={() => removeTours(tour.id)}>not interested</button>
      </footer>
    </article>
  );
};

export default Tour;
