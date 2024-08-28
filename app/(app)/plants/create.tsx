import ThemedButton from "@/components/ThemedButton";
import { ThemedInput } from "@/components/ThemedInput";
import { ThemedText } from "@/components/ThemedText";
import WateringFrequencyPicker from "@/components/WateringFrequencyPicker";
import { api } from "@/convex/_generated/api";
import { useAuth } from "@/hooks/useAuth";
import { useMutation } from "convex/react";
import { router } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

export default function CreatePlantScreen(): React.JSX.Element {
  const { theme, styles } = useStyles(stylesheet);

  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");
  const [wateringFrequency, setWateringFrequency] = useState(0);

  const { user } = useAuth();

  const createPlant = useMutation(api.plants.createPlant.default);

  const handleCreatePlant = async () => {
    await createPlant({
      values: {
        name,
        notes,
        userId: user._id,
        wateringFrequency,
        imageId: null,
      },
    });
    router.back();
  };

  return (
    <View style={styles.container}>
      <ThemedText variant="title">Create a plant</ThemedText>
      <ThemedText variant="formLabel">Give it a name</ThemedText>
      <ThemedInput placeholder="Name" value={name} onChangeText={setName} />
      <ThemedText variant="formLabel">Pick days to water</ThemedText>
      <WateringFrequencyPicker
        value={wateringFrequency}
        onChange={setWateringFrequency}
      />
      <ThemedText variant="formLabel">Note special needs</ThemedText>
      <ThemedInput placeholder="Notes" value={notes} onChangeText={setNotes} />
      <ThemedButton title="Create my plant" onPress={handleCreatePlant} />
    </View>
  );
}

const stylesheet = createStyleSheet((theme, rt) => ({
  container: {
    flex: 1,
    padding: theme.padding.$5,
    gap: theme.spacing.$4,
  },
}));
