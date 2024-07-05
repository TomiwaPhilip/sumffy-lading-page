/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
          allowedOrigins: [
            "legendary-space-orbit-jv7w5xpvq7gcqqp6-3000.app.github.dev",
            "localhost:3000",
          ],
          missingSuspenseWithCSRBailout: true,
        },
      },
};

export default nextConfig;
