import { AuthProvider } from "@/contexts/AuthContext";
import { Stack } from "expo-router";

export default function AppLayout() {
  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="plants/[id]" options={{ headerShown: false }} />
        <Stack.Screen
          name="plants/create"
          options={{ headerShown: false, presentation: "modal" }}
        />
      </Stack>
    </AuthProvider>
  );
}
