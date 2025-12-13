import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { User } from "@/schemas/auth";

export interface AuthState {
  user: Omit<User, "passwordHash"> | null;
  accessToken: string | null;
  login: (user: User) => void;
  setAccessToken: (token: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      accessToken: null,
      isAuthenticated: false,
      login: (user: User) =>
        set({
          user,
        }),

      setAccessToken: (token: string) =>
        set((state) => ({
          ...state,
          accessToken: token,
        })),

      logout: () =>
        set({
          user: null,
          accessToken: null,
        }),
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({
        user: state.user,
        accessToken: state.accessToken,
        isAuthenticated: !!state.accessToken,
      }),
    },
  ),
);
