import { View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { Authenticated, Unauthenticated } from "convex/react";

import ThemedButton from "@/components/ThemedButton";
import { Redirect, router } from "expo-router";

export default function IndexScreen() {
  const { theme, styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <Unauthenticated>
        <ThemedButton title="Login" onPress={() => router.push("/login")} />
      </Unauthenticated>
      <Authenticated>
        <Redirect href="/(app)/" />
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
