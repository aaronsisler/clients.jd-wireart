import { validate } from 'email-validator';
import { apiGatewayEmailURL, apiGatewayToken, pointOfContactEmail, websiteURL } from '../config';

export const isEmailValid = (email) => validate(email);

const sendRequest = (data, done, fail) => {
    const emailProperties = {
        emailAddress: "",
        message: "",
        name: "",
        phoneNumber: "",
        website: "",
        pointOfContactEmail,
        ...data
    };

    if (data.galleryPieceId) {
        emailProperties.galleryPieceLink = constructGalleryPieceLink(data.galleryPieceId);
    }

    const request = new XMLHttpRequest();
    request.onload = function () {
        done();
    }
    request.onerror = function () {
        fail();
    }
    request.open('POST', apiGatewayEmailURL, true);
    request.setRequestHeader("X-Api-Key", apiGatewayToken);
    request.setRequestHeader("Content-Type", "application/json");
    request.send(JSON.stringify(emailProperties));
}

const constructGalleryPieceLink = (galleryPieceId) => `${websiteURL}/gallery_piece/${galleryPieceId}`;

export const sendEmail = (data, done, fail) => sendRequest(data, done, fail);
