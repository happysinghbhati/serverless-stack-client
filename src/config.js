export default {
MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "US East (N. Virginia)",
    BUCKET: "sample-notes-demo-uploads"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://ax6eny14z7.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_SHJ5bj8Uf",
    APP_CLIENT_ID: "4sb1hpqo2oopu82of76a924u8u",
    IDENTITY_POOL_ID: "us-east-1:8cb5cb73-8d23-4d70-8a86-40f02ec4ce1f"
  },
STRIPE_KEY: "pk_test_utDLY4bHlYmWhmywUi1tVyAY00UOCIfzet"
};
