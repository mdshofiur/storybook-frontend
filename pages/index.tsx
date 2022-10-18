import React from 'react';

const Hemo = ({ props }) => {
  console.log(props);
  return (
    <div className='bg-red-500 text-red-200 text-center py-32'>
      Hello StoryBook!
    </div>
  );
};

export default Hemo;