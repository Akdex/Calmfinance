import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface SettingsState {
  theme: "system" | "light" | "dark";
  aiKeys: {
    openai: string;
    gemini: string;
    perplexity: string;
  };
  aiRouting: {
    extraction: string;
    categorization: string;
    insights: string;
  };
  setTheme: (theme: "system" | "light" | "dark") => void;
  setAIKey: (provider: "openai" | "gemini" | "perplexity", key: string) => void;
  setAIRouting: (
    task: "extraction" | "categorization" | "insights",
    model: string
  ) => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      theme: "dark",
      aiKeys: {
        openai: "",
        gemini: "",
        perplexity: "",
      },
      aiRouting: {
        extraction: "ChatGPT-4o",
        categorization: "Gemini Flash",
        insights: "ChatGPT-4o",
      },
      setTheme: (theme) => set({ theme }),
      setAIKey: (provider, key) =>
        set((state) => ({
          aiKeys: { ...state.aiKeys, [provider]: key },
        })),
      setAIRouting: (task, model) =>
        set((state) => ({
          aiRouting: { ...state.aiRouting, [task]: model },
        })),
    }),
    {
      name: "settings-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
