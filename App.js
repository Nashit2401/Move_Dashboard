import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Dashboard from "./screens/Dashboard";
import BottomSheet from "./screens/BottomSheet";

export default function App() {
  return (
    <Dashboard />
    // <BottomSheet />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
