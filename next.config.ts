import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // 🔥 ESLint 에러 무시하고 빌드 진행
  },
};

export default nextConfig;