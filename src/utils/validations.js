/* ---------- BASIC ---------- */
export const isRequired = (v) =>
  v !== undefined && v !== null && String(v).trim() !== "";

export const isOnlyText = (v) => /^[A-Za-z\s]+$/.test(String(v || "").trim());

/* ---------- INDIAN PHONE ---------- */
export const isIndianMobile = (v) =>
  /^[6-9]\d{9}$/.test(String(v || "").trim());

/* ---------- EMAIL ---------- */
export const isValidEmail = (v) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v || "").trim());

/* ---------- IMAGE FILE ---------- */
const ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/jpg"];
const ALLOWED_IMAGE_EXTENSIONS = ["jpeg", "jpg", "png"];

export const isAllowedImageFormat = (file) => {
  if (!file) return false;

  const fileName = file.name || "";
  const ext = fileName.split(".").pop()?.toLowerCase();

  return (
    ALLOWED_IMAGE_TYPES.includes(file.type) ||
    ALLOWED_IMAGE_EXTENSIONS.includes(ext)
  );
};

export const isValidFileSize = (file, maxMB = 5) =>
  !!file && typeof file.size === "number" && file.size <= maxMB * 1024 * 1024;

export const isValidImage = (file, maxMB = 5) => {
  if (!file) return false; // optional field
  return isAllowedImageFormat(file) && isValidFileSize(file, maxMB);
};
