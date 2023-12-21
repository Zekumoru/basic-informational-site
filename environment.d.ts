declare global {
  namespace NodeJS {
    interface ProcessEnv {
      HOSTNAME: string;
      LOCAL_HOSTNAME: string;
      HOST: string;
      LOCAL_HOST: string;
      PRE_HOST: string;
      PORT: string;
      NODE_ENV: "development" | "production";
    }
  }
}

export {};
