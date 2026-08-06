const DEFAULT_LOCAL_API_URL = "http://localhost:5000";
const DEFAULT_PROD_API_URL = "https://covianlab-backend.vercel.app";

export function getApiBaseUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_API_URL?.trim().replace(/\/$/, "");

  if (configuredUrl) {
    return configuredUrl;
  }

  if (typeof window !== "undefined") {
    const { hostname } = window.location;

    if (hostname === "localhost" || hostname === "127.0.0.1") {
      return DEFAULT_LOCAL_API_URL;
    }
  }

  return DEFAULT_PROD_API_URL;
}