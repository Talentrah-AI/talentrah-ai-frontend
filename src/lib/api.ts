import axios from "axios";

// Define a type for user profile data
interface UserProfileData {
  name: string;
  email: string;
  // Add other fields as needed
}

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add request interceptor for authentication
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

// API endpoints
export const endpoints = {
  notifications: {
    list: () => api.get("/notifications"),
    markAsRead: (id: string) => api.patch(`/notifications/${id}/read`),
    markAllAsRead: () => api.patch("/notifications/read-all"),
  },
  user: {
    getProfile: () => api.get("/user/profile"),
    updateProfile: (data: UserProfileData) => api.patch("/user/profile", data),
    updateLanguage: (language: string) =>
      api.patch("/user/language", { language }),
  },
  subscription: {
    getPlan: () => api.get("/subscription/plan"),
    upgrade: (planId: string) => api.post("/subscription/upgrade", { planId }),
  },
} as const;
