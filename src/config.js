const dev = {
  STRIPE_KEY: "pk_test_utDLY4bHlYmWhmywUi1tVyAY00UOCIfzet",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-serverlessdeploymentbucket-d0umw9j0d27x"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://i411p2j1zi.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_Zq2dLoKDH",
    APP_CLIENT_ID: "3qb25fse2g5h6qur54bbk2ttsk",
    IDENTITY_POOL_ID: "us-east-1:2d49affc-a1fc-4623-842b-412dce8609f6"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_utDLY4bHlYmWhmywUi1tVyAY00UOCIfzet",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-serverlessdeploymentbucket-5c9lt78gg9uj"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://v8uro4yqb8.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_jLk1Lfwvi",
    APP_CLIENT_ID: "268o5jo5bhjumqmflhfa684idr",
    IDENTITY_POOL_ID: "us-east-1:444960c1-e612-40ac-a5ed-e4cb13d2a964"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
