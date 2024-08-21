import React from "react";
import { Pressable, Text, type PressableProps, View } from "react-native";
import {
  createStyleSheet,
  UnistylesVariants,
  useStyles,
} from "react-native-unistyles";

type ThemeButtonVariants = UnistylesVariants<typeof stylesheet>;

export type ThemedButtonProps = PressableProps &
  ThemeButtonVariants & {
    title: string;
  };

export function ThemedButton({
  variant,
  title,
  style,
  ...rest
}: ThemedButtonProps) {
  const { styles } = useStyles(stylesheet, {
    variant,
  });

  return (
    <Pressable {...rest}>
      {({ pressed }) => (
        <View style={[styles.default, { opacity: pressed ? 0.5 : 1 }]}>
          <Text style={styles.text}>{title}</Text>
        </View>
      )}
    </Pressable>
  );
}

const stylesheet = createStyleSheet((theme, rt) => ({
  default: {
    paddingVertical: 18,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4caf50",
    variants: {
      variant: {
        primary: {
          backgroundColor: "#4caf50",
        },
        secondary: {
          backgroundColor: "#6c757d",
        },
        success: {
          backgroundColor: "#28a745",
        },
        danger: {
          backgroundColor: "#dc3545",
        },
        warning: {
          backgroundColor: "#ffc107",
        },
        info: {
          backgroundColor: "#17a2b8",
        },
        light: {
          backgroundColor: "#f8f9fa",
        },
        dark: {
          backgroundColor: "#343a40",
        },
      },
    },
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    variants: {
      variant: {
        light: {
          color: "#000",
        },
      },
    },
  },
}));

export default ThemedButton;
