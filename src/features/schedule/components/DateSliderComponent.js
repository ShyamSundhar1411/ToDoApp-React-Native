import {
  eachWeekOfInterval,
  subDays,
  addDays,
  format,
  eachDayOfInterval,
} from "date-fns";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PagerView from "react-native-pager-view";
export const DateSliderComponent = () => {
  const dates = eachWeekOfInterval(
    {
      start: subDays(new Date(), 14),
      end: addDays(new Date(), 14),
    },
    {
      weekStartsOn: 1,
    },
  ).reduce((acc, cur) => {
    const allDays = eachDayOfInterval({
      start: cur,
      end: addDays(cur, 6),
    });
    acc.push(allDays);
    return acc;
  }, []);
  return (
    <PagerView style={styles.container}>
      {dates.map((week, i) => {
        const firstDayOfWeek = week[0];
        const monthToRender = format(firstDayOfWeek, "MMMM yyyy");
        return (
          <View key={i}>
            <View style={styles.monthContainer}>
              <Text style={styles.monthText}>{monthToRender}</Text>
            </View>
            <View style={styles.row}>
              {week.map((day, index) => {
                const dayToRender = format(day, "EEEEE");
                return (
                  <View key={index} style={styles.day}>
                    <Text>{dayToRender}</Text>
                    <Text>{day.getDate()}</Text>
                  </View>
                );
              })}
            </View>
          </View>
        );
      })}
    </PagerView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  day: {
    alignItems: "center",
  },
  monthContainer: {
    alignItems: "center",
    padding: 10,
  },
  monthText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
