import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CircularProgress from "react-native-circular-progress-indicator";
import { MaterialCommunityIcons, Feather, Entypo } from "@expo/vector-icons";

const PerformedExercise = ({
  name,
  reps,
  mins,
  intensity,
  accuracy,
  color,
}) => {
  return (
    <View style={styles.cardView}>
      <View style={{ justifyContent: "space-around" }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={styles.name}>{name}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
          }}
        >
          <Feather name="repeat" size={14} color="black" />
          <Text style={styles.normText}>{reps} reps</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
          }}
        >
          <Entypo name="stopwatch" size={14} color="black" />
          <Text style={styles.normText}>{mins} mins</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
          }}
        >
          <MaterialCommunityIcons
            name="signal-cellular-outline"
            size={14}
            color="black"
          />
          <Text style={styles.normText}>{intensity}</Text>
        </View>
      </View>

      <View style={styles.progress}>
        <CircularProgress
          radius={50}
          value={accuracy}
          textColor={color}
          inActiveStrokeColor="#ECECEC"
          inActiveStrokeWidth={2}
          activeStrokeColor={color}
          activeStrokeWidth={4}
          valueSuffix="%"
          title="Accuracy"
          progressValueFontSize={18}
          inActiveStrokeOpacity={0.8}
        />
      </View>
    </View>
  );
};

export default PerformedExercise;

const styles = StyleSheet.create({
  cardView: {
    backgroundColor: "white",
    height: 150,
    borderRadius: 15,
    paddingHorizontal: 5,
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  progress: {
    justifyContent: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
  },
  normText: {
    fontSize: 12,
    color: "grey",
    fontWeight: "400",
  },
});
