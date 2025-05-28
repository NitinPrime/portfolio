// LabelTag.js
import React from 'react';
import './LabelTag.css';

const LabelTag = ({ txt, fill }) => {
  return (
    <div className="label-tag" style={{ borderColor: fill, color: fill }}>
      {txt}
    </div>
  );
};

export default LabelTag;
