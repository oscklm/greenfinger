import { api } from "@/convex/_generated/api";
import { Doc } from "@/convex/_generated/dataModel";
import { useAuthActions } from "@convex-dev/auth/dist/react";
import { useQuery } from "convex/react";
import React, { createContext, useEffect, useState } from "react";

interface AuthContextData {
  user: Doc<"users">;
}

export const AuthContext = createContext<AuthContextData>({
  user: null as any,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { signIn: signInConvex, signOut: signOutConvex } = useAuthActions();
  const [user, setUser] = useState<Doc<"users"> | null>(null);

  const currentUser = useQuery(api.users.getCurrentUser.default);

  useEffect(() => {
    if (currentUser) {
      setUser(currentUser);
    }
  }, [currentUser]);

  if (!user) {
    return null;
  }

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
