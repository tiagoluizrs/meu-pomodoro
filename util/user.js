import {
  getAuth,
  updateProfile,
  signInWithCredential,
} from "firebase/auth";
import { getData } from "./storage";
import { authLogin } from "./auth";

const update = async (app, object) => {
    const auth = getAuth(app);
    updateProfile(auth.currentUser, object);
};

export { update };
