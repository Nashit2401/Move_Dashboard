import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import { Button } from "react-native-paper";

const ForgotPassword = () => {
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.topText}>
        <Text style={styles.topHeading}>Create New Password</Text>
        <Text style={styles.normText}>
          Your new password must be different from your previous password
        </Text>
      </View>
      <View style={styles.textFieldView}>
        <TextInput
          style={styles.textFields}
          placeholder="Enter New Password"
          value={newPass}
        />
        <TextInput style={styles.textFields} placeholder="Re-enter Password" />
      </View>

      <View>
        <Button textColor="white" style={styles.button}>
          Save
        </Button>
      </View>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
    gap: 10,
  },
  topText: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "baseline",
    paddingHorizontal: 10,
  },
  topHeading: {
    fontSize: 30,
    fontWeight: "700",
    alignSelf: "center",
  },
  normText: {
    fontSize: 14,
    alignSelf: "center",
    textAlign: "justify",
    marginTop: 5,
  },
  textFieldView: {
    marginTop: 60,
    gap: 10,
  },
  textFields: {
    borderWidth: 1,
    borderRadius: 30,
    height: 60,
    paddingHorizontal: 15,
  },
  button: {
    backgroundColor: "darkblue",
    marginTop: 30,
    height: 50,
    justifyContent: "center",
    borderRadius: 30,
  },
});
