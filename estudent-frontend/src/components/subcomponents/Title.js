import React from 'react';
import '../../style/Title.css';

function Title(props) {
  return (
    <div className="title-container">
      <span className="title-label">{props.title}</span>
      <div className="title-underline"></div>
    </div>
  );
}

export default Title;
