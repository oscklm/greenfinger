declare global {
  namespace NodeJS {
    interface ProcessEnv {
      EXPO_PUBLIC_CONVEX_URL: string;
    }
  }
}

export {};