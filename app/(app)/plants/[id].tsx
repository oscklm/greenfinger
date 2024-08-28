import { Text, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

export default function ViewPlantScreen(): React.JSX.Element {
  const { theme, styles } = useStyles(stylesheet);
  return (
    <View style={styles.container}>
      <Text>ViewPlantScreen</Text>
    </View>
  );
}

const stylesheet = createStyleSheet((theme, rt) => ({
  container: {
    flex: 1,
  },
}));
