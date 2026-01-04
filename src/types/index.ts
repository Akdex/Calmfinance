export type TransactionType = "expense" | "income" | "emi" | "investment";

export interface Transaction {
  id: string;
  amount: number;
  type: TransactionType;
  category: string;
  date: string; // ISO string
  description: string;
  isRecurring?: boolean;
  recurrenceInterval?: "monthly" | "yearly";
}

export interface FinancialProfile {
  netWorth: number;
  stabilityScore: number; // 0-100
  currency: string;
  monthlyIncome: number;
  monthlyExpenses: number;
  totalDebt: number;
  totalAssets: number;
}

export interface Asset {
  id: string;
  name: string;
  value: number;
  type:
    | "stock"
    | "mutual_fund"
    | "real_estate"
    | "crypto"
    | "gold"
    | "fixed_deposit"
    | "epf"
    | "other";
}

export interface Liability {
  id: string;
  name: string;
  totalAmount: number;
  remainingAmount: number;
  monthlyEmi: number;
  type:
    | "home_loan"
    | "car_loan"
    | "personal_loan"
    | "education_loan"
    | "credit_card"
    | "other";
}
