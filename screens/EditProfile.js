import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const EditProfile = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.editCard}></View>
    </SafeAreaView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  editCard: {
    alignSelf: "center",
    height: 500,
    width: "90%",
    backgroundColor: "lightblue",
    borderRadius: 20,
  },
});
