import axios from "axios";
import { validate } from "email-validator";
import {
  pointOfContactEmail,
  servicesApiGatewayToken,
  servicesApiGatewayURL,
  websiteURL
} from "../config";

const headers = {
  "Content-Type": "application/json",
  "X-Api-Key": servicesApiGatewayToken
};

const emailOptions = { headers };

export const isEmailValid = emailAddress => validate(emailAddress);

export const sendEmail = async (data, done, fail) => {
  const emailData = { pointOfContactEmail, ...data };

  if (data.galleryPieceId) {
    emailData.galleryPieceLink = constructManagerGalleryPieceLink(
      data.galleryPieceId
    );
  }

  try {
    await axios.post(`${servicesApiGatewayURL}/email`, emailData, emailOptions);
    done();
  } catch (e) {
    fail();
  }
};

export const constructGalleryPieceLink = galleryPieceId =>
  `${websiteURL}/gallery_piece/${galleryPieceId}`;

export const constructManagerGalleryPieceLink = galleryPieceId =>
  `${websiteURL}/manager/${galleryPieceId}`;
