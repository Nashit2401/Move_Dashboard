import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React, {
  useState,
  useRef,
  useMemo,
  useCallback,
  useEffect,
} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CircularProgress from "react-native-circular-progress-indicator";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Lunges from "../assets/images/Lunges.jpg";

const Dashboard = () => {
  const [value, setValue] = useState(0);
  const bottomSheetModalRef = useRef(null);
  const snapPoints = useMemo(() => ["33%", "100%"], []);

  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
    if (index < 0) {
      // If the index is less than 0, set it to 0 to prevent it from hiding.
      bottomSheetModalRef.current?.present(); // Snap the sheet back to the initial position.
      return 0; // Return 0 to indicate that the sheet is at the minimum position.
    }
    return index;
  }, []);
  useEffect(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={styles.Header}>
          <Text style={styles.HeaderText}>Today's Goal</Text>
        </View>
        <View style={styles.progress}>
          <CircularProgress
            radius={70}
            value={30}
            textColor="#141669"
            inActiveStrokeColor="#ECECEC"
            inActiveStrokeWidth={2}
            activeStrokeColor="#141669"
            activeStrokeWidth={4}
            valueSuffix="%"
            progressValueFontSize={34}
            inActiveStrokeOpacity={0.8}
          />
          <CircularProgress
            radius={70}
            value={30}
            textColor="#141669"
            inActiveStrokeColor="#ECECEC"
            inActiveStrokeWidth={2}
            activeStrokeColor="#bdab45"
            activeStrokeWidth={4}
            valueSuffix="%"
            progressValueFontSize={34}
            inActiveStrokeOpacity={0.8}
          />
        </View>
        <View style={styles.progressText}>
          <Text> Daily Progress</Text>
          <Text> Weakly Progress</Text>
        </View>
        <View style={styles.activiyText}>
          <View>
            <Text style={styles.activityTopText}>10%</Text>
            <Text style={styles.activityBottomText}>Recovered</Text>
          </View>
          <View>
            <Text style={styles.activityTopText}>5</Text>
            <Text style={styles.activityBottomText}> Exercises</Text>
          </View>
          <View>
            <Text style={styles.activityTopText}>33%</Text>
            <Text style={styles.activityBottomText}>Adherence</Text>
          </View>
        </View>

        <BottomSheetModalProvider>
          <View style={styles.containerSheet}>
            <BottomSheetModal
              ref={bottomSheetModalRef}
              index={0}
              snapPoints={snapPoints}
              onChange={handleSheetChanges}
              enableOverDrag={true}
              backgroundStyle={{ backgroundColor: "#e5f1fd" }}
            >
              <View style={styles.contentContainer}>
                <View style={{ padding: 10 }}>
                  <Text style={{ fontSize: 24 }}>Upcoming Exercises</Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    padding: 5,
                    justifyContent: "flex-end",
                    alignItems: "baseline",
                  }}
                >
                  <ImageBackground
                    source={Lunges}
                    resizeMode="cover"
                    style={styles.image}
                    imageStyle={{
                      borderRadius: 15,
                      width: "99%",
                      height: "30%",
                    }}
                  >
                    <View
                      style={{
                        height: "30%",
                        width: "99%",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Text style={styles.text}>Cross Body Reach</Text>
                      <View
                        style={{
                          flexDirection: "row",
                          gap: 10,
                        }}
                      >
                        <Text
                          style={{
                            color: "white",
                            paddingLeft: 20,
                            paddingBottom: 8,
                          }}
                        >
                          Shoulder
                        </Text>
                        <Text
                          style={{
                            color: "white",
                            paddingBottom: 8,
                          }}
                        >
                          15 mins
                        </Text>
                        <Text
                          style={{
                            color: "white",
                            paddingBottom: 8,
                          }}
                        >
                          Low
                        </Text>
                      </View>
                    </View>
                  </ImageBackground>
                </View>
              </View>
            </BottomSheetModal>
          </View>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Header: {
    paddingHorizontal: 25,
  },
  HeaderText: {
    fontWeight: "600",
    fontSize: 22,
  },
  progress: {
    height: 200,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 30,
  },
  progressText: {
    flexDirection: "row",
    paddingHorizontal: 55,
    marginTop: 10,
    gap: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  activiyText: {
    flexDirection: "row",
    marginTop: 50,
    justifyContent: "space-evenly",
  },
  activityBottomText: {
    textAlign: "center",
  },
  activityTopText: {
    textAlign: "center",
    fontSize: 28,
  },
  containerSheet: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
  },
  contentContainer: {
    flex: 1,
    backgroundColor: "#e5f1fd",
  },
  image: {
    flex: 1,
    justifyContent: "flex-start",
    width: "90",
    height: "60%",
  },
  text: {
    color: "white",
    fontSize: 22,
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
});
