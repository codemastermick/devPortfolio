import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from "express";
import * as cors from "cors";
import { DocumentSnapshot } from 'firebase-functions/lib/providers/firestore';

const nodemailer = require('nodemailer');
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: "OAuth2",
    user: 'codemastermick@gmail.com',
    clientId: "584777788367-vkhjv5gfnq0n8n3jucj7pjrvt3cu7oa0.apps.googleusercontent.com",
    clientSecret: "fglHBL9U1a3E0hgDY5W8nEvc",
    refreshToken: "1/92ObjNPY48bKAo5VGq2YqTxbV9jjh1QSJzm0OpjDDzkrEO0s-mCTTmyy9hkXgLC9"
  },
});

export const app = express()
app.use(express.urlencoded({ extended: true })); // needed to correctly parse the put/post requests
app.use(cors());

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://dev-profile-cd9ed.firebaseio.com"
});

import { contact } from "./routes/contact.api";
app.use("/contact", contact);


export const api = functions.https.onRequest(app);

exports.alerter = functions.firestore
  .document("messages/{msgID}")
  .onCreate(async (change, context) => {
    const mailOptions = {
      from: `"Job Bot" ${change.get("email")}`,
      to: "codemastermick@gmail.com",
      subject: "!WORK REQUEST!",
      text: formatMessageBody(change)
    };

    try {
      await mailTransport.sendMail(mailOptions);
      console.log("Work notice sent!");
    } catch (error) {
      console.error('There was an error while sending the email:', error);
    }
    return null;
  });

function formatMessageBody(change: DocumentSnapshot) {
  return `${change.get("message")}

${change.get("name")} ${change.get("email")}
`;
}
