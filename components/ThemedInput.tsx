import React from "react";
import { TextInput, type TextInputProps } from "react-native";
import {
  createStyleSheet,
  UnistylesVariants,
  useStyles,
} from "react-native-unistyles";

type ThemeInputVariants = UnistylesVariants<typeof stylesheet>;

export type ThemedInputProps = TextInputProps & ThemeInputVariants;

export function ThemedInput({ variant, style, ...rest }: ThemedInputProps) {
  const { styles } = useStyles(stylesheet, {
    variant,
  });

  return <TextInput style={[style, styles.default]} {...rest} />;
}

const stylesheet = createStyleSheet((theme, rt) => ({
  default: {
    fontSize: 16,
    fontWeight: "semibold",
    lineHeight: 20,
    paddingVertical: 16,
    paddingHorizontal: 14,
    borderWidth: 2,
    backgroundColor: "#fff",
    borderColor: "#ccc",
    borderRadius: 5,
    variants: {
      variant: {
        error: {
          borderColor: "red",
          color: "red",
        },
        success: {
          borderColor: "green",
          color: "green",
        },
      },
    },
  },
}));
