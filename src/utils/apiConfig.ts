import { config } from "dotenv";

config();

type Settings = "appPort" | "StormGlassAPIToken" | "jwtSecretKey";

const configurations: {
  [key in Settings]: string;
} = {
  appPort: process.env.APP_PORT as string,
  StormGlassAPIToken: process.env.STORMGLASS as string,
  // mongoDBUrl: process.env.MONGODB_URL as string,
  jwtSecretKey: process.env.JWT_SECRET_KEY as string,
};

function validateEnvironmentConfigurations(configs: {
  [key in Settings]: string;
}) {
  for (const key of Object.keys(configs)) {
    const value = configs[key as Settings];
    if (!value) {
      throw new Error(`Environment variable ${key} is missing.`);
    }
  }
}

validateEnvironmentConfigurations(configurations);

export default configurations;
