import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MyCalendar = () => {
  const FirstWeek = () => {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const dates = [3, 4, 5, 6, 7, 8, 9]; // Example dates
    const today = 5; // Today is Wednesday (index 2, date 5)
    var day = [];

    for (let index = 0; index < 7; index++) {
      day.push(
        <View key={index} style={styles.dayContainer}>
          <Text style={styles.dayText}>{days[index]}</Text>
          <View
            style={[
              styles.dateContainer,
              dates[index] === today && styles.activeDateContainer,
            ]}
          >
            <Text
              style={[
                styles.dateText,
                dates[index] === today && styles.activeDateText,
              ]}
            >
              {dates[index]}
            </Text>
          </View>
        </View>
      );
    }
    return day;
  };

  return (
    <View style={styles.container}>
      <View style={styles.calendarCard}>
        <View style={styles.weekContainer}>
          <FirstWeek />
        </View>

        <View style={styles.scheduleSection}>
          <Text style={styles.scheduleTitle}>Schedule for today</Text>
          <Text style={styles.noRecordText}>No record found</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  calendarCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  weekContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  dayContainer: {
    flex: 1,
    alignItems: "center",
  },
  dayText: {
    fontSize: 12,
    color: "#666",
    marginBottom: 8,
    fontWeight: "500",
  },
  dateContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  activeDateContainer: {
    backgroundColor: "#8B5CF6", // Purple background for active date
  },
  dateText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  activeDateText: {
    color: "#fff", // White text for active date
  },
  scheduleSection: {
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    paddingTop: 15,
  },
  scheduleTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  noRecordText: {
    fontSize: 14,
    color: "#999",
  },
});

export default MyCalendar;
