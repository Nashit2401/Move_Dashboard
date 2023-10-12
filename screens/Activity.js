import { Pressable, StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CircularProgress from "react-native-circular-progress-indicator";
import PerformedExercise from "../components/cards/PerformedExercise";

const Activity = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={{ height: "99%" }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.topView}>
          <View style={styles.topViewItem}>
            <CircularProgress
              radius={15}
              value={90}
              textColor="#141669"
              inActiveStrokeColor="#ECECEC"
              inActiveStrokeWidth={2}
              activeStrokeColor="#141669"
              activeStrokeWidth={4}
              progressValueFontSize={10}
              inActiveStrokeOpacity={0.8}
            />
            <Text>Mon</Text>
          </View>
          <View style={styles.topViewItem}>
            <CircularProgress
              radius={15}
              value={65}
              textColor="#141669"
              inActiveStrokeColor="#ECECEC"
              inActiveStrokeWidth={2}
              activeStrokeColor="#141669"
              activeStrokeWidth={4}
              progressValueFontSize={10}
              inActiveStrokeOpacity={0.8}
            />
            <Text>Tue</Text>
          </View>
          <View style={styles.todayItem}>
            <CircularProgress
              radius={15}
              value={43}
              textColor="#141669"
              inActiveStrokeColor="#ECECEC"
              inActiveStrokeWidth={2}
              activeStrokeColor="#141669"
              activeStrokeWidth={4}
              progressValueFontSize={10}
              inActiveStrokeOpacity={0.8}
            />
            <Text>Wed</Text>
          </View>
          <View style={styles.topViewItem}>
            <CircularProgress
              radius={15}
              value={23}
              textColor="#141669"
              inActiveStrokeColor="#ECECEC"
              inActiveStrokeWidth={2}
              activeStrokeColor="#141669"
              activeStrokeWidth={4}
              progressValueFontSize={10}
              inActiveStrokeOpacity={0.8}
            />
            <Text>Thur</Text>
          </View>
          <View style={styles.topViewItem}>
            <CircularProgress
              radius={15}
              value={10}
              textColor="#141669"
              inActiveStrokeColor="#ECECEC"
              inActiveStrokeWidth={2}
              activeStrokeColor="#141669"
              activeStrokeWidth={4}
              progressValueFontSize={10}
              inActiveStrokeOpacity={0.8}
            />
            <Text>Fri</Text>
          </View>
        </View>
        <View style={styles.middleView}>
          <View style={styles.progressToday}>
            <CircularProgress
              radius={85}
              value={43}
              textColor="#141669"
              inActiveStrokeColor="#ECECEC"
              inActiveStrokeWidth={4}
              activeStrokeColor="#141669"
              activeStrokeWidth={6}
              valueSuffix="%"
              progressValueFontSize={42}
              inActiveStrokeOpacity={0.8}
            />
            <Text style={styles.progressNormText}>Today's Progress</Text>
          </View>
          <View style={styles.midRightView}>
            <View>
              <Text style={styles.progressHeadingText}>10%</Text>
              <Text style={styles.progressNormText}>Recovered</Text>
            </View>
            <View>
              <Text style={styles.progressHeadingText}>3</Text>
              <Text style={styles.progressNormText}>Exercises</Text>
            </View>
            <View>
              <Text style={styles.progressHeadingText}>43%</Text>
              <Text style={styles.progressNormText}>Accuracy</Text>
            </View>
          </View>
        </View>
        <View style={styles.performedExercises}>
          <Text style={styles.progressHeadingText}>Exercises Performed</Text>
          <PerformedExercise
            name={"Cross Body Reach"}
            mins={"15"}
            reps={"12"}
            intensity={"Low"}
            accuracy={75}
            color={"#c2dd72"}
          />
          <PerformedExercise
            name={"Leg Raise"}
            mins={"15"}
            reps={"12"}
            intensity={"Low"}
            accuracy={15}
            color={"#f69100"}
          />
          <PerformedExercise
            name={"Half Squat"}
            mins={"15"}
            reps={"12"}
            intensity={"Low"}
            accuracy={23}
            color={"#14c6f0"}
          />
        </View>
        <View style={{ height: 20 }}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Activity;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  topView: {
    backgroundColor: "white",
    marginTop: 10,
    marginBottom: 40,
    justifyContent: "space-around",
    borderRadius: 10,
    paddingHorizontal: 15,
    flexDirection: "row",
  },
  topViewItem: {
    justifyContent: "center",
    alignItems: "center",
  },
  todayItem: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 17,
    padding: 5,
  },
  middleView: {
    flex: 0.5,
    marginTop: 10,
    flexDirection: "row",
    marginBottom: 50,
  },
  progressToday: {
    width: "50%",
    justifyContent: "space-around",
    alignItems: "center",
    marginHorizontal: 30,
    gap: 10,
  },
  midRightView: { justifyContent: "space-evenly", marginTop: 10 },
  progressHeadingText: {
    fontSize: 24,
    fontWeight: "600",
  },
  progressNormText: {
    fontSize: 18,
    fontWeight: "400",
    color: "lightgrey",
  },
  performedExercises: {
    flex: 0.5,
    marginHorizontal: 2,
    gap: 10,
  },
});
