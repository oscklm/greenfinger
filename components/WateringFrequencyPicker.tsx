import React, { useState, useEffect, useCallback } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

interface WateringFrequencyPickerProps {
  value: number;
  onChange?: (value: number) => void;
}

const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];
const DEBOUNCE_DELAY = 600; // Adjust the delay as needed

const WateringFrequencyPicker: React.FC<WateringFrequencyPickerProps> = ({
  value,
  onChange,
}) => {
  const [selectedDays, setSelectedDays] = useState<number>(value);
  const [debouncedValue, setDebouncedValue] = useState<number>(value);

  useEffect(() => {
    setSelectedDays(value);
  }, [value]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(selectedDays);
    }, DEBOUNCE_DELAY);

    return () => {
      clearTimeout(handler);
    };
  }, [selectedDays]);

  useEffect(() => {
    if (debouncedValue !== value) {
      onChange?.(debouncedValue);
    }
  }, [debouncedValue, onChange, value]);

  const toggleDay = (dayIndex: number) => {
    const newSelectedDays = selectedDays ^ (1 << dayIndex);
    setSelectedDays(newSelectedDays);
  };

  const isSelected = (dayIndex: number) => {
    return (selectedDays & (1 << dayIndex)) !== 0;
  };

  return (
    <View style={styles.container}>
      {daysOfWeek.map((day, index) => (
        <Pressable
          key={index}
          style={[
            styles.dayButton,
            isSelected(index) && styles.selectedDayButton,
          ]}
          onPress={() => toggleDay(index)}
        >
          <Text style={styles.dayText}>{day}</Text>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
    gap: 12,
  },
  dayButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#ddd",
  },
  selectedDayButton: {
    backgroundColor: "#4caf50",
  },
  dayText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default WateringFrequencyPicker;
