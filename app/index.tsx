import { View } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import { ThemedText } from "@/components/ThemedText";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import {
  Authenticated,
  Unauthenticated,
  useMutation,
  useQuery,
} from "convex/react";
import { api } from "@/convex/_generated/api";
import WateringFrequencyPicker from "@/components/WateringFrequencyPicker";
import { Id } from "@/convex/_generated/dataModel";
import ThemedButton from "@/components/ThemedButton";
import { router } from "expo-router";
import { useAuthActions } from "@convex-dev/auth/dist/react";

export default function IndexScreen() {
  const { theme, styles } = useStyles(stylesheet);

  const { signOut } = useAuthActions();
  const plants = useQuery(api.plants.queries.getAllPlants.default);
  const updatePlant = useMutation(api.plants.mutations.updatePlant.default);

  const handleUpdateWateringFrequency = async (
    id: Id<"plants">,
    frequency: number
  ) => {
    await updatePlant({
      id,
      values: {
        wateringFrequency: frequency,
      },
    });
  };

  return (
    <View style={styles.container}>
      <Unauthenticated>
        <ThemedButton title="Login" onPress={() => router.push("/login")} />
      </Unauthenticated>
      <Authenticated>
        <ThemedText variant="title">Welcome back!</ThemedText>
        <ThemedButton variant="danger" title="Logout" onPress={signOut} />
        {plants &&
          plants.map((plant) => (
            <View key={plant._id} style={styles.plantCard}>
              <ThemedText key={plant._id} variant="subtitle">
                {plant.name}
              </ThemedText>
              <WateringFrequencyPicker
                value={plant.wateringFrequency}
                onChange={(frequency) =>
                  handleUpdateWateringFrequency(plant._id, frequency)
                }
              />
            </View>
          ))}
      </Authenticated>
    </View>
  );
}

const stylesheet = createStyleSheet((theme, rt) => ({
  container: {
    flex: 1,
    paddingTop: rt.insets.top,
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  plantCard: {
    flexDirection: "column",
    marginBottom: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
}));
