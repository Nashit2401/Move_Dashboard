import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "../Dashboard";
import Home from "../Home";
import Profile from "../Profile";
import { NavigationContainer } from "@react-navigation/native";
import EditProfile from "../EditProfile";
import Activity from "../Activity";
import ForgotPassword from "../ForgotPassword";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name={"Dashboard"}
          component={Dashboard}
          options={{ headerShown: true }}
        />
        {/* <Tab.Screen name="Dashboard" component={Dashboard} /> */}
        <Tab.Screen name="Profile" component={Profile} />
        {/* <Tab.Screen name="EditProfile" component={EditProfile} /> */}
        <Tab.Screen name="Forgot Password" component={ForgotPassword} />
        <Tab.Screen name="Activity" component={Activity} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
