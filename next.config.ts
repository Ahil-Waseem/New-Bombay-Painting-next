import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/services/lamination",
        destination: "/services/wood-polish-lamination",
        permanent: true,
      },
      {
        source: "/services/wallpaper",
        destination: "/services/wallpaper-installation",
        permanent: true,
      },
         {
        source: "/interior-painting",
        destination: "/services/interior-painting",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
