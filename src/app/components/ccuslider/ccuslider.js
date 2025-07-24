
"use client"
import React, { useState } from 'react';
import { Range, getTrackBackground } from 'react-range';
import './globals.css'; 

const DoubleEndedSlider = ({ MIN, MAX,STEP }) => {
  const [values, setValues] = useState([MIN, MAX]);

  return (
    <div className="range-container">
      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={(values) => setValues(values)}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            className="range-track"
            style={{
              background: getTrackBackground({
                values: values,
                colors: ['#ccc', '#000', '#ccc'],
                min: MIN,
                max: MAX
              }),
              alignSelf: 'center',
              width: '100%',
              height: '10px'
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            className="range-thumb"
            style={{
              ...props.style,
              height: '24px',
              width: '24px',
              borderRadius: '50%',
              backgroundColor: '#000',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0px 2px 6px #AAA'
            }}
          >
            <div
              style={{
                height: '16px',
                width: '5px',
                backgroundColor: isDragged ? '#000' : '#000'
              }}
            />
          </div>
        )}
      />
          
      <div className="range-label">
        <output className="range-value" id="output">
          {values[0].toFixed(1)}
        </output>
        <output className="range-value" id="output">
          {values[1].toFixed(1)}
        </output>
      </div>

    </div>
  );
};

export default DoubleEndedSlider;
