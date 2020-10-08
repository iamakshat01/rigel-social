const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    'mongodb+srv://imakshat01:Akshat01@cluster0.jeody.mongodb.net/socialmedia?retryWrites=true&w=majority'
    }

export default config
