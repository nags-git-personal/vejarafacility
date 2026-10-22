module.exports = {
  apps: [
    {
      name: "vejarafacility-app",
      script: ".next/standalone/server.js",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "800M",
      env: {
        NODE_ENV: "production",
        PORT: 3005,
        HOSTNAME: "0.0.0.0",
        DATABASE_URL: "file:./prisma/prod.db",
      },
    },
  ],
};
