import React from 'react';
import '../../style/Notification.css';

function Notification(props) {
  const { message, onClick } = props;

  return (
    <div className="notification" onClick={onClick}>
      <span>{message}</span>
      <div className="notification-underline"></div>
    </div>
  );
}

export default Notification;
