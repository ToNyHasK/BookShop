import React from 'react';
import '../Styles/Error.css';
// Error message
// eslint-disable-next-line react/prop-types
export default function Error({ error }) {
  return (
    <div className="errorCont">
      <h2 className="errorText">{error}</h2>
    </div>
  );
}
