import { NotificationManager } from "react-notifications";

export const createNotification = (type, title, message) => {
  switch (type) {
    case "info":
      NotificationManager.info(message, title, 3000);
      break;
    case "success":
      NotificationManager.success(message, title, 1500);
      break;
    case "warning":
      NotificationManager.warning(message, title, 3000);
      break;
    case "error":
      NotificationManager.error(message, title, 1500);
      break;
    default:
      return false;
  }
};
