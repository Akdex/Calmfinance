import { Transaction } from "@/src/types";
import { create } from "zustand";

interface TransactionState {
  transactions: Transaction[];

  addTransaction: (transaction: Transaction) => void;
  updateTransaction: (transaction: Transaction) => void;
  deleteTransaction: (id: string) => void;
  getTransactionsByMonth: (month: number, year: number) => Transaction[];
}

export const useTransactionStore = create<TransactionState>((set, get) => ({
  transactions: [],

  addTransaction: (transaction) => {
    set((state) => ({ transactions: [transaction, ...state.transactions] }));
  },

  updateTransaction: (updatedTransaction) => {
    set((state) => ({
      transactions: state.transactions.map((t) =>
        t.id === updatedTransaction.id ? updatedTransaction : t
      ),
    }));
  },

  deleteTransaction: (id) => {
    set((state) => ({
      transactions: state.transactions.filter((t) => t.id !== id),
    }));
  },

  getTransactionsByMonth: (month, year) => {
    return get().transactions.filter((t) => {
      const date = new Date(t.date);
      return date.getMonth() === month && date.getFullYear() === year;
    });
  },
}));
