import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  getStorage,
  ref,
  uploadString,
  getDownloadURL
} from "firebase/firebase-storage";

const saveImageBase64ToUrl = async (app, prefix, imageB64) => {
  const fileName = `${prefix}`;
  const storage = getStorage(app);
  const storageRef = ref(storage, fileName);

  await uploadString(storageRef, imageB64, "data_url");
  return fileName;
}

const getFile = async (app, image) => {

}

const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    // saving error
  }
};

const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

export { storeData, getData, saveImageBase64ToUrl, getFile };