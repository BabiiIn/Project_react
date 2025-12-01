import React from 'react';

export const ProgressBar = ({ progress, height = 4, colors = ['#4f46e5', '#22d3ee'] }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height,
        background: 'transparent',
        zIndex: 9999
      }}
      aria-hidden="true"
    >
      <div
        style={{
          width: `${(progress * 100).toFixed(2)}%`,
          height: '100%',
          background: `linear-gradient(90deg, ${colors[0]}, ${colors[1]})`,
          transition: 'width 80ms linear'
        }}
      />
    </div>
  );
};
