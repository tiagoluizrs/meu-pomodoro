import {
  getAuth,
  updateProfile,
  signInWithCredential,
} from "firebase/auth";
import { getData, saveImageBase64ToUrl } from "./storage";
import { authLogin } from "./auth";

const update = async (app, object) => {
    const auth = getAuth(app);
    let filename;

    filename = saveImageBase64ToUrl(app, 'blabla', object.photoURL);
    console.log(filename);
    // await updateProfile(auth.currentUser, object);
};

export { update };
