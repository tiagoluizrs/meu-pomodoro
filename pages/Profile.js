import { View, Text, Image } from "react-native";
import {
  TextInput,
  Avatar,
  Button,
  Snackbar,
} from "@react-native-material/core";
import { update } from "../util/user";
import { getData } from "../util/storage";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useState, useEffect } from "react";

const Profile = ({ route }) =>{
    const [email, setEmail] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [photoURL, setPhotoURL] = useState("");
    const [snackBarShow, setSnackBarShow] = useState(false);

    const loadProfile = async () => {
        let user = await getData("user");
        setEmail(user.email);
        setDisplayName(user.displayName);
        setPhoneNumber(user.phoneNumber);
    }

    useEffect(() => {
        loadProfile();
    }, [])
    return (
      <View
        style={{
          alignSelf: "stretch",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          padding: 20,
        }}
      >
        <Avatar
          size={150}
          image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }}
        />
        <TextInput
          style={{
            width: "100%",
            marginTop: 32,
          }}
          label="E-mail"
          variant="outlined"
          value={email}
          leading={(props) => <Icon name="email" {...props} />}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          style={{
            width: "100%",
          }}
          label="Nome"
          variant="outlined"
          value={displayName}
          leading={(props) => <Icon name="account" {...props} />}
          onChange={(e) => setDisplayName(e.target.value)}
        />
        <TextInput
          style={{
            width: "100%",
          }}
          label="Telefone"
          variant="outlined"
          value={phoneNumber}
          leading={(props) => <Icon name="phone" {...props} />}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <Button
          title="Editar Perfil"
          onPress={async () => {
            update(route.params.firebaseApp, {
              email,
              displayName,
              phoneNumber,
            });
            setSnackBarShow(true);
          }}
          leading={(props) => <Icon name="pencil" {...props} />}
          //   loading={loading}
          style={{
            width: "100%",
          }}
        />
        <>
          {snackBarShow ? (
            <Snackbar
              message="Usuário alterado com sucesso!!!"
              action={
                <Button title="Fechar" onPress={() => setSnackBarShow(false)} />
              }
              style={{ position: "absolute", start: 16, end: 16, bottom: 16 }}
            />
          ) : (
            ""
          )}
        </>
      </View>
    );
}

export default Profile;