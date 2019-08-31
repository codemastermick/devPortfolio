import * as admin from 'firebase-admin';
import * as express from "express";
import * as cors from "cors";

export const contact = express()
contact.use(express.urlencoded({ extended: true })); // needed to correctly parse the put/post requests
contact.use(cors());

// Create organization
contact.put("/*", async (request, response) => {
  admin.firestore().collection("messages").add({
    name: request.body.name,
    email: request.body.email,
    message: request.body.message
  }).then(res => {
    response.status(200).json({uid:`${res.id}`});
  }).catch(err => {
    response.status(400).send(err);
  });
});
