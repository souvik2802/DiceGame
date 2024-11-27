import React, { useState } from 'react'
import './NumberSelector.css';

const NumberSelector = ({selectedIndex, setSelectedIndex}) => {
  const arr = [1, 2, 3, 4, 5, 6];
  // const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClick = (index) => {
    // Toggle selection: If clicked again, deselect the box.
    setSelectedIndex(selectedIndex === index ? null : index);
  };

  return (
    <div className="all-box">
      {arr.map((value, index) => (
        <div
          key={index}
          className="box"
          onClick={() => handleClick(index)}
          style={{
            cursor: 'pointer',
            color: selectedIndex === index ? 'white' : 'black',
            backgroundColor: selectedIndex === index ? 'black' : 'white',
            padding: '10px',
            margin: '5px',
            display: 'inline-block',
            border: '1px solid black',
            textAlign: 'center',
            width: '40px'
          }}
        >
          {value}
        </div>
      ))}
      <p style={{
        // marginTop:'4rem',
        whiteSpace: 'nowrap',
        position:'absolute',
        top:'5rem',
        right:'6rem',
        display: 'inline-block'
      }}>Select Number</p>
    </div>
  );
};

export default NumberSelector;
