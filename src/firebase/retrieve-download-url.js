import { storage } from "./firebase";

const retrieveDownloadUrl = (storagePath, documentName) =>
  storage
    .ref(storagePath)
    .child(documentName)
    .getDownloadURL();

export default retrieveDownloadUrl;
