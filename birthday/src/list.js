import React from 'react';

const List = ({people}) => {
  return (
    <div className='flex flex-col gap-5'>
      {people.map((val) => {
        const {id, name, age, image} = val;
        return (
          <div key={id} className='flex item-center gap-4' >
            <img  src={image} alt={name} className='h-20 w-20 rounded-full'/>
            <div>
              <h4 >{name}</h4>
              <p >{age}</p>
            </div>
          </div>
        );
      })}
      
    </div>
  );
};

export default List;
