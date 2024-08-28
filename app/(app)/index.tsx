import { ThemedText } from "@/components/ThemedText";
import WateringFrequencyPicker from "@/components/WateringFrequencyPicker";
import { api } from "@/convex/_generated/api";
import { useAuth } from "@/hooks/useAuth";
import { MaterialIcons } from "@expo/vector-icons";
import { useQuery } from "convex/react";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

export default function IndexScreen() {
  const { theme, styles } = useStyles(stylesheet);
  const { user } = useAuth();

  const plants = useQuery(api.plants.getAllPlants.default);

  if (!plants) return <ThemedText>Loading...</ThemedText>;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Hi {user.email} 👋</Text>
      </View>
      <View style={styles.plantsContainer}>
        {plants?.map((plant, index) => (
          <View key={`${plant._id}-${index}`} style={styles.plantCard}>
            <ThemedText key={plant._id} variant="title">
              {plant._id}
            </ThemedText>
            <ThemedText key={plant._id} variant="subtitle">
              {plant.notes}
            </ThemedText>
            <WateringFrequencyPicker
              disableEditing
              value={plant.wateringFrequency}
            />
          </View>
        ))}
      </View>
      <View style={styles.addPlantButtonContainer}>
        <Pressable onPress={() => router.push("/(app)/plants/create")}>
          <View style={styles.addPlantButton}>
            <MaterialIcons name="add" size={38} color={theme.colors.white} />
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const stylesheet = createStyleSheet((theme, rt) => ({
  container: {
    flex: 1,
    paddingTop: rt.insets.top,
    padding: theme.padding.$5,
    gap: theme.spacing.$5,
  },
  header: {
    padding: 15,
    height: 50,
    backgroundColor: theme.colors.gray$1,
    borderRadius: theme.borderRadius.$2,
  },
  plantsContainer: {
    gap: theme.spacing.$4,
  },
  addPlantButtonContainer: {
    position: "absolute",
    right: 0,
    bottom: 0,
    padding: theme.padding.$7,
    paddingBottom: rt.insets.bottom,
  },
  addPlantButton: {
    backgroundColor: theme.colors.green$1,
    borderRadius: theme.borderRadius.$full,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  plantCard: {
    flexDirection: "column",
    marginBottom: 8,
    padding: theme.padding.$5,
    gap: theme.spacing.$3,
    borderRadius: theme.borderRadius.$3,
    backgroundColor: theme.colors.green$4,
  },
}));
