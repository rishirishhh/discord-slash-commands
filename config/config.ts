import { env, environment } from "../src/typeDefinitions/default.types";
import {
  RDS_BASE_API_URL,
  RDS_BASE_STAGING_API_URL,
  RDS_BASE_DEVELOPMENT_API_URL,
  VERIFICATION_SITE_URL,
  STAGING_VERIFICATION_SITE_URL,
  DEVELOPMENT_VERIFICATION_SITE_URL,
  RDS_TRACKING_CHANNEL_URL,
  DEVELOPMENT_RDS_TRACKING_CHANNEL_URL,
  STAGING_RDS_TRACKING_CHANNEL_URL,
} from "../src/constants/urls";
import {
  DISCORD_PROFILE_SERVICE_HELP_GROUP,
  DISCORD_PROFILE_SERVICE_STAGING_HELP_GROUP,
  DISCORD_PROFILE_SERVICE_DEVELOPMENT_HELP_GROUP,
} from "../src/constants/variables";

const config = (env: env) => {
  const environment: environment = {
    production: {
      RDS_BASE_API_URL: RDS_BASE_API_URL,
      VERIFICATION_SITE_URL: VERIFICATION_SITE_URL,
      TRACKING_CHANNEL_URL: RDS_TRACKING_CHANNEL_URL,
      PROFILE_SERVICE_HELP_GROUP_ID: DISCORD_PROFILE_SERVICE_HELP_GROUP,
    },
    staging: {
      RDS_BASE_API_URL: RDS_BASE_STAGING_API_URL,
      VERIFICATION_SITE_URL: STAGING_VERIFICATION_SITE_URL,
      TRACKING_CHANNEL_URL: STAGING_RDS_TRACKING_CHANNEL_URL,
      PROFILE_SERVICE_HELP_GROUP_ID: DISCORD_PROFILE_SERVICE_STAGING_HELP_GROUP,
    },
    default: {
      RDS_BASE_API_URL: RDS_BASE_DEVELOPMENT_API_URL,
      VERIFICATION_SITE_URL: DEVELOPMENT_VERIFICATION_SITE_URL,
      TRACKING_CHANNEL_URL: DEVELOPMENT_RDS_TRACKING_CHANNEL_URL,
      PROFILE_SERVICE_HELP_GROUP_ID:
        DISCORD_PROFILE_SERVICE_DEVELOPMENT_HELP_GROUP,
    },
  };

  return environment[env.CURRENT_ENVIRONMENT] || environment.default;
};

export default config;
