const admin = require("firebase-admin");
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const sendNotification = async (fcmToken, notification) => {
  try {
    await admin.messaging().send({
      token: fcmToken,
      notification,
    });
    console.log("Notification sent successfully");
  } catch (error) {
    console.error("Error sending notification:", error);
  }
};

module.exports = { sendNotification };
