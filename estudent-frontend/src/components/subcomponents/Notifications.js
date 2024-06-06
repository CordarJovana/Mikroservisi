import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaBell } from 'react-icons/fa';
import Notification from '../../components/subcomponents/Notification';
import '../../style/Notification.css';

function Notifications(props) {
  const { id } = props;
  const [notifications, setNotifications] = useState([]);
  const [showNotificationContainer, setShowNotificationContainer] = useState(false);
  const [unreadNotifications, setUnreadNotifications] = useState(0);

  useEffect(() => {
    async function checkNotifications() {
      try {
        const response = await axios.get(`http://localhost:1337/checkNotifications/${id}`);
        if (response.data.newNotifications && response.data.newNotifications.length > 0) {
          addNotifications(response.data.newNotifications);
        }
      } catch (error) {
        console.error(error);
      }
    }

    checkNotifications();
    const interval = setInterval(checkNotifications, 36000000);
    return () => clearInterval(interval);
  }, []);

  function addNotifications(messages) {
    setNotifications([...notifications, ...messages]);
    setUnreadNotifications(unreadNotifications + messages.length);
  }

  function removeNotification(index) {
    const newNotifications = [...notifications];
    newNotifications.splice(index, 1);
    setNotifications(newNotifications);
    setUnreadNotifications(Math.max(0, unreadNotifications - 1));
  }

  function toggleNotificationContainer() {
    setShowNotificationContainer(!showNotificationContainer);
    setUnreadNotifications(0);
  }

  return (
    <div className="notification-wrapper">
      <FaBell size={24} color="white" onClick={toggleNotificationContainer} />
      {unreadNotifications > 0 && <div className="notification-badge"></div>}
      {showNotificationContainer && (
        <div className="notification-popup">
          <div className="notification-popup-content">
            {notifications.length > 0 ? (
              notifications.map((message, index) => (
                <Notification key={index} message={message} onClick={() => removeNotification(index)} />
              ))
            ) : (
              <div className="notification-empty">No notifications.</div>
            )}
          </div>
          <div className="notification-popup-arrow"></div>
        </div>
      )}
    </div>
  );
}

export default Notifications;
