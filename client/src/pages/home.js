import React from 'react';

export default function home() {
  return (
        <div>
          {Array(50)
          .fill()
          .map((i) => <h1>Hello owlr</h1>)}
        </div>
  );
}
