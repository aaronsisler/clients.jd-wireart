import database from 'Firebase/firebase';
import { setPaypalFlag } from 'Actions/helpers/galleryPiece';

export const startSetPaypalFlag = (galleryPieceId) => (dispatch) =>
    database.ref(`gallery/${galleryPieceId}`).update({ paypalActive: true }).then(() =>
        dispatch(setPaypalFlag(galleryPieceId))
    );
