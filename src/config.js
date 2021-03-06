export default {
    s3: {
        REGION: "us-east-1",
        BUCKET: "anran-notes-app"
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://av5qe7z5a0.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_ytYxYYcfb",
        APP_CLIENT_ID: "25cf22m85stp0p7ega0tnladps",
        IDENTITY_POOL_ID: "us-east-1:5517353c-075b-4f1c-808c-652cebe3a0a6"
    },
    MAX_ATTACHMENT_SIZE: 1000000,
    STRIPE_KEY: "pk_test_51HTLljFXBuGFGKc1l58MoWrEDS8AlsiSpBBAbuWgx4b0D7zNzFxpyE0ZR3N3iuBF18t8GXk4m6JIOWRVwFtU1E0a00iQ3XHGGQ",
};