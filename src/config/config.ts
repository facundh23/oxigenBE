import dotenv from "dotenv";

type TConfig = {
  [key: string]: EnviromentConfig;
};

type EnviromentConfig = {
  app: AppConfig;
  DB: DbConfig;
};

type AppConfig = {
  PORT: string | number;
};
type DbConfig = {
  DB?: string;
  URI: string;
};
if (process.env.NODE_ENV === "production") {
  dotenv.config({ path: ".env.production" });
} else {
  dotenv.config({ path: ".env.development" });
}

const ENV = process.env.NODE_ENV ?? "development";

const CONFIG: TConfig = {
  development: {
    app: {
      PORT: process.env.PORT || 3000,
    },
    DB: {
      URI: process.env.MONGODB_URI || "",
    },
  },
  production: {
    app: {
      PORT: process.env.PORT || 4001,
    },
    DB: {
      URI: process.env.MONGODB_URI || "",
    },
  },
};

export default CONFIG[ENV];
