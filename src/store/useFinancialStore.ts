import { Asset, FinancialProfile, Liability } from "@/src/types";
import { create } from "zustand";

interface FinancialState {
  profile: FinancialProfile;
  assets: Asset[];
  liabilities: Liability[];

  // Actions
  updateAsset: (asset: Asset) => void;
  addAsset: (asset: Asset) => void;
  removeAsset: (id: string) => void;

  updateLiability: (liability: Liability) => void;
  addLiability: (liability: Liability) => void;
  removeLiability: (id: string) => void;

  calculateNetWorth: () => void;
  calculateStabilityScore: () => void;
}

export const useFinancialStore = create<FinancialState>((set, get) => ({
  profile: {
    netWorth: 0,
    stabilityScore: 50, // Start neutral
    currency: "$",
    monthlyIncome: 0,
    monthlyExpenses: 0,
    totalDebt: 0,
    totalAssets: 0,
  },
  assets: [],
  liabilities: [],

  addAsset: (asset) => {
    set((state) => ({ assets: [...state.assets, asset] }));
    get().calculateNetWorth();
  },

  updateAsset: (updatedAsset) => {
    set((state) => ({
      assets: state.assets.map((a) =>
        a.id === updatedAsset.id ? updatedAsset : a
      ),
    }));
    get().calculateNetWorth();
  },

  removeAsset: (id) => {
    set((state) => ({ assets: state.assets.filter((a) => a.id !== id) }));
    get().calculateNetWorth();
  },

  addLiability: (liability) => {
    set((state) => ({ liabilities: [...state.liabilities, liability] }));
    get().calculateNetWorth();
  },

  updateLiability: (updatedLiability) => {
    set((state) => ({
      liabilities: state.liabilities.map((l) =>
        l.id === updatedLiability.id ? updatedLiability : l
      ),
    }));
    get().calculateNetWorth();
  },

  removeLiability: (id) => {
    set((state) => ({
      liabilities: state.liabilities.filter((l) => l.id !== id),
    }));
    get().calculateNetWorth();
  },

  calculateNetWorth: () => {
    set((state) => {
      const totalAssets = state.assets.reduce(
        (sum, item) => sum + item.value,
        0
      );
      const totalDebt = state.liabilities.reduce(
        (sum, item) => sum + item.remainingAmount,
        0
      );
      const netWorth = totalAssets - totalDebt;

      return {
        profile: {
          ...state.profile,
          totalAssets,
          totalDebt,
          netWorth,
        },
      };
    });
    get().calculateStabilityScore();
  },

  calculateStabilityScore: () => {
    // Placeholder logic for stability score
    set((state) => {
      let score = 50;
      // Simple logic: Net worth positive adds points, low debt adds points
      if (state.profile.netWorth > 0) score += 10;
      if (state.profile.totalDebt === 0) score += 10;
      if (state.profile.totalAssets > state.profile.totalDebt * 2) score += 10;

      return {
        profile: {
          ...state.profile,
          stabilityScore: Math.min(100, Math.max(0, score)),
        },
      };
    });
  },
}));
