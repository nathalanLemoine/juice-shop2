// config/secrets-demo.js - EXAMPLE INSECURE CODE (DO NOT USE IN PRODUCTION)
// Hardcoded API keys - VULNERABILITIES FOR DEMO ONLY
const OPENAI_API_KEY = "sk-proj-1234567890abcdefghijklmnopqrs";
const STRIPE_SECRET_KEY = "sk_live_4eC39HqLyjWDarhtMeEz2A7e";
// AWS credentials
const AWS_ACCESS_KEY_ID = "AKIAIOSFODNN7EXAMPLE";
const AWS_SECRET_ACCESS_KEY = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY";
// Database passwords
const DB_PASSWORD = "MyDatabasePassword123456";
const MONGODB_URI =
"mongodb+srv://admin:SuperSecret456@cluster.mongodb.net/";
// Private API endpoints
const PRIVATE_API_KEY = "ghp_1234567890abcdefghijklmnopqrstuvwxyz";
// Google Cloud
const GCP_SERVICE_ACCOUNT_JSON =
'{"type":"service_account","project_id":"my-project","private_key":"-----
BEGIN PRIVATE KEY-----
\\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC7VJTUt+..."';
module.exports = {
openai: OPENAI_API_KEY,
stripe: STRIPE_SECRET_KEY,
aws: { access: AWS_ACCESS_KEY_ID, secret: AWS_SECRET_ACCESS_KEY },
db: DB_PASSWORD,
mongodb: MONGODB_URI,
github: PRIVATE_API_KEY
};
