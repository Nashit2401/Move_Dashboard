import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import PushUp from "../assets/images/PushUp.jpg";
import { Button } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";
import EvilIcons from "@expo/vector-icons/EvilIcons";

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image
          source={PushUp}
          style={{
            width: 200,
            height: 200,
            borderRadius: 100,
            borderWidth: 3,
            borderColor: "blue",
          }}
        />
      </View>
      <View style={styles.name}>
        <Text>Linda Merchant</Text>
      </View>
      <View style={[styles.profilePicture, { marginTop: 20 }]}>
        <Button
          mode="contained"
          style={styles.button}
          onPress={() => {
            navigation.navigate("EditProfile");
          }}
        >
          Edit Profile
        </Button>
      </View>
      <View style={styles.bottomView}>
        <View style={{ alignItems: "center", gap: 10 }}>
          <Ionicons name="notifications-outline" size={25} />
          <Text>Notification</Text>
        </View>
        <View style={{ alignItems: "center", gap: 10 }}>
          <EvilIcons name="gear" size={26} />
          <Text>Settings</Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profilePicture: {
    justifyContent: "center",
    alignItems: "center",
  },
  name: { justifyContent: "center", alignItems: "center" },
  imageView: {
    justifyContent: "center",
    alignItems: "center",
    height: 250,
    width: "100%",
    marginTop: 30,
  },
  button: {
    borderRadius: 50,
    backgroundColor: "#141669",
    width: 180,
  },
  bottomView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 20,
    alignItems: "center",
    marginTop: 30,
  },
});
