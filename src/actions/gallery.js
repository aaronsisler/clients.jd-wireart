import database from 'Firebase/firebase';
import { setGallery } from 'Actions/helpers/gallery';

export const startSetGallery = () => (dispatch) =>
    database.ref(`gallery`).once('value').then((snapshot) => {
        const gallery = [];
        snapshot.forEach((childSnapshot) => {
            gallery.push({
                galleryItemId: childSnapshot.key,
                ...childSnapshot.val(),
            });
        });

        return dispatch(setGallery(gallery));
    });
