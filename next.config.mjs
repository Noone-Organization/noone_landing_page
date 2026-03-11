import { dirname } from "path";
import { fileURLToPath } from "url";

/** @type {import('next').NextConfig} */
const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const normalizedBasePath = rawBasePath.trim().replace(/\/$/, "");
const basePath = normalizedBasePath === "/" ? "" : normalizedBasePath;
const __dirname = dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  basePath,
  assetPrefix: basePath ? `${basePath}/` : "",
  output: "export",
  turbopack: {
    root: __dirname,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

 