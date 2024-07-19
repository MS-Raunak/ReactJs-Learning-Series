import React, { useState } from 'react';

function BgChanger() {
  const[bgColor, setBgColor] = useState('');

  const changeHandler = (color) => {
    setBgColor(color)
  }

  return (
    <>
      <div className={`${bgColor} p-3`}>
        <h2>Background Color Changer</h2>
        <button className='btn btn-danger btn-md m-2' onClick={() => changeHandler('bg-danger')}>Red</button>
        <button className='btn btn-primary btn-md m-2' onClick={() => changeHandler('bg-primary')}>Blue</button>
        <button className='btn btn-success btn-md m-2' onClick={() => changeHandler('bg-success')}>Green</button>
        <button className='btn btn-secondary btn-md m-2' onClick={() => changeHandler('')}>White</button>
      </div>
    </>
  );
}

export default BgChanger;