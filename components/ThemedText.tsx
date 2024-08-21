import { Text, type TextProps } from "react-native";

import {
  createStyleSheet,
  UnistylesVariants,
  useStyles,
} from "react-native-unistyles";

type ThemeTextVariants = UnistylesVariants<typeof stylesheet>;

export type ThemedTextProps = TextProps & ThemeTextVariants;

export function ThemedText({ variant, ...rest }: ThemedTextProps) {
  const { styles } = useStyles(stylesheet, {
    variant,
  });

  return <Text style={styles.default} {...rest} />;
}

const stylesheet = createStyleSheet((theme, rt) => ({
  default: {
    fontSize: 16,
    lineHeight: 24,
    variants: {
      variant: {
        defaultSemiBold: {
          fontSize: 16,
          lineHeight: 24,
          fontWeight: "600",
        },
        title: {
          fontSize: 32,
          fontWeight: "bold",
          lineHeight: 32,
        },
        subtitle: {
          fontSize: 20,
          fontWeight: "bold",
        },
        link: {
          lineHeight: 30,
          fontSize: 16,
          color: "#0a7ea4",
        },
      },
    },
  },
}));
