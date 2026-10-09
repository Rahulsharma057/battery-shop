export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://battery-shop-backend-ocb4.onrender.com";

export const BATTERIES_URL = `${API_BASE_URL}/api/batteries`;
export const LOGIN_URL = `${API_BASE_URL}/api/admin/login`;

export function getAdminToken() {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("adminToken");
}

export function authHeaders() {
  const token = getAdminToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export async function apiFetch(url, options = {}) {
  const res = await fetch(url, {
    ...options,
    headers: {
      ...authHeaders(),
      ...(options.headers || {}),
    },
  });
  return res;
}
