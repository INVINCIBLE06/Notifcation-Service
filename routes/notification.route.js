
const notificationController = require("../controllers/notification.controller");
module.exports = (app) => {
    /**
     * Insert a new notification request
     * POST /notiserv/api/v1/notification
     */

    app.post("/notiserv/api/v1/notification", notificationController.acceptNotificationRequest);

    /**
     * Get the notification status -> if the email notificaton was sent or not
     * GET /notiserv/api/v1/notification/
     */

    app.get("/notiserv/api/v1/notification/:id", notificationController.getNotificationDetails);

}