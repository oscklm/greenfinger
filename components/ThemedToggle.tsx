import React from "react";
import { Pressable, ViewStyle, StyleProp } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import {
  createStyleSheet,
  UnistylesVariants,
  useStyles,
} from "react-native-unistyles";

type ThemeToggleVariants = UnistylesVariants<typeof stylesheet>;

type ThemedToggleProps = ThemeToggleVariants & {
  value: boolean;
  onChange: (value: boolean) => void;
  onIcon: keyof typeof FontAwesome.glyphMap;
  offIcon: keyof typeof FontAwesome.glyphMap;
  style?: StyleProp<ViewStyle>;
};

export function ThemedToggle({
  value,
  onChange,
  onIcon,
  offIcon,
  variant,
  style,
}: ThemedToggleProps) {
  const { styles } = useStyles(stylesheet, {
    variant,
  });

  return (
    <Pressable
      style={[styles.container, style]}
      onPress={() => onChange(!value)}
    >
      <FontAwesome
        name={value ? onIcon : offIcon}
        size={24}
        color={value ? styles.iconOn.color : styles.iconOff.color}
      />
    </Pressable>
  );
}

const stylesheet = createStyleSheet((theme, rt) => ({
  container: {
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    variants: {
      variant: {
        primary: {
          backgroundColor: "#007bff",
        },
        secondary: {
          backgroundColor: "#6c757d",
        },
      },
    },
  },
  iconOn: {
    color: "black",
  },
  iconOff: {
    color: "gray",
  },
}));

export default ThemedToggle;
