import React, { useState, useEffect } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

interface WateringFrequencyPickerProps {
  value: number;
  disableEditing?: boolean;
  onChange?: (value: number) => void;
}

const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];
const DEBOUNCE_DELAY = 600;

const WateringFrequencyPicker: React.FC<WateringFrequencyPickerProps> = ({
  value,
  disableEditing = false,
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
          key={`${day}-${index}`}
          disabled={disableEditing}
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
