import ThemedButton from "@/components/ThemedButton";
import { ThemedInput } from "@/components/ThemedInput";
import ThemedToggle from "@/components/ThemedToggle";
import { useAuth } from "@/hooks/useAuth";
import { useAuthActions } from "@convex-dev/auth/dist/react";
import { Authenticated } from "convex/react";
import { Redirect } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

export default function LoginScreen() {
  const { theme, styles } = useStyles(stylesheet);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const { signIn } = useAuthActions();

  const handleSignIn = async () => {
    setIsLoading(true);
    await signIn("password", {
      flow: "signIn",
      email: email.trim(),
      password: password.trim(),
    });
    setIsLoading(false);
  };

  const handleSignUp = async () => {
    setIsLoading(true);
    await signIn("password", {
      flow: "signUp",
      email: email.trim(),
      password: password.trim(),
    });
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      <Authenticated>
        <Redirect href="/(app)/" />
      </Authenticated>
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
