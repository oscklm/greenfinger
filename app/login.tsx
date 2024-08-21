import ThemedButton from "@/components/ThemedButton";
import { ThemedInput } from "@/components/ThemedInput";
import ThemedToggle from "@/components/ThemedToggle";
import { useAuthActions } from "@convex-dev/auth/dist/react";
import { router } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

export default function LoginScreen() {
  const { theme, styles } = useStyles(stylesheet);

  const { signIn } = useAuthActions();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async () => {
    setIsLoading(true);
    await signIn("password", { flow: "signIn", email, password });
    router.back();
    setIsLoading(false);
  };

  const handleSignUp = async () => {
    setIsLoading(true);
    await signIn("password", { flow: "signUp", email, password });
    router.back();
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <ThemedInput
          placeholder="Email"
          value={email}
          autoCapitalize="none"
          onChangeText={setEmail}
        />
        <View>
          <ThemedInput
            secureTextEntry={!showPassword}
            placeholder="Password"
            autoCapitalize="none"
            value={password}
            onChangeText={setPassword}
          />
          <View style={styles.toggleContainer}>
            <ThemedToggle
              onIcon="eye"
              offIcon="eye-slash"
              value={showPassword}
              onChange={setShowPassword}
            />
          </View>
        </View>
        <ThemedButton title="Sign me in" onPress={handleSignIn} />
        <ThemedButton
          variant="secondary"
          title="Create an account"
          onPress={handleSignUp}
        />
      </View>
    </View>
  );
}

const stylesheet = createStyleSheet((theme, rt) => ({
  container: {
    flex: 1,
    paddingTop: rt.insets.top,
    padding: 30,
  },
  toggleContainer: {
    position: "absolute",
    right: 10,
    top: 0,
    bottom: 0,
    height: "100%",
    justifyContent: "center",
  },
  formContainer: {
    flexDirection: "column",
    gap: 20,
  },
}));
