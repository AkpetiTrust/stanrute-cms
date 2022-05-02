import React, { useState } from "react";
import style from "./index.module.css";
import { Head, Row } from "./components";

function Notification() {
  const [notifications, setNotifications] = useState([
    {
      message: "Someone just graduated from the fundamentals course",
      seen: false,
      id: 1,
    },
    {
      message: "8 persons just graduated from the fundamentals course",
      seen: false,
      id: 2,
    },
    {
      message: "Someone just graduated from the fundamentals course",
      seen: false,
      id: 3,
    },
  ]);

  const onCheckBoxClicked = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) => {
        let newNotification = { ...notification };
        if (notification.id === id) {
          newNotification.seen = !notification.seen;
        }

        return newNotification;
      })
    );
  };

  const markAllAsRead = () => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) => {
        let newNotification = { ...notification };
        newNotification.seen = true;
        return newNotification;
      })
    );
  };

  const deleteMarked = () => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => !notification.seen)
    );
  };

  return (
    <div className={style.notification}>
      <Head functions={{ markAllAsRead, deleteMarked }} />
      {notifications.map((notification) => (
        <Row
          onClick={() => {
            onCheckBoxClicked(notification.id);
          }}
          notification={notification}
          key={`${notification.id}+${notification.seen}`}
        />
      ))}
    </div>
  );
}

export default Notification;
