import { AddTransactionModal } from "@/src/components/features/AddTransactionModal";
import { StabilityScore } from "@/src/components/features/StabilityScore";
import { Card } from "@/src/components/ui/Card";
import { ScreenLayout } from "@/src/components/ui/ScreenLayout";
import { Body, Caption, H2 } from "@/src/components/ui/Typography";
import { useFinancialStore } from "@/src/store/useFinancialStore";
import { useTransactionStore } from "@/src/store/useTransactionStore";
import { Link } from "expo-router";
import {
  Bell,
  Globe,
  ListPlus,
  PiggyBank,
  Receipt,
  Search,
  Settings,
  Shield,
  ShoppingBag,
  Sparkles,
  TrendingUp,
  Wallet,
} from "lucide-react-native";
import { forwardRef, useMemo, useState } from "react";
import { Image, Pressable, TouchableOpacity, View } from "react-native";
import { useShallow } from "zustand/react/shallow";

export default function HomeScreen() {
  const profile = useFinancialStore(useShallow((state) => state.profile));
  const transactions = useTransactionStore(
    useShallow((state) => state.transactions)
  );

  const [modalVisible, setModalVisible] = useState(false);
  const [activeModalType, setActiveModalType] = useState<"income" | "expense">(
    "expense"
  );

  const openModal = (type: "income" | "expense") => {
    setActiveModalType(type);
    setModalVisible(true);
  };

  // Derive monthly totals from transactions
  const { monthlyIncome, monthlyExpenses } = useMemo(() => {
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    return transactions.reduce(
      (acc, t) => {
        const tDate = new Date(t.date);
        if (
          tDate.getMonth() === currentMonth &&
          tDate.getFullYear() === currentYear
        ) {
          if (t.type === "income") acc.monthlyIncome += t.amount;
          if (t.type === "expense") acc.monthlyExpenses += t.amount;
        }
        return acc;
      },
      { monthlyIncome: 0, monthlyExpenses: 0 }
    );
  }, [transactions]);

  const formatCurrency = (amount: number) => {
    return `${profile.currency}${amount.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })}`;
  };

  return (
    <ScreenLayout scrollable>
      {/* Header */}
      <View className="flex-row justify-between items-center mt-6 mb-8 px-2">
        <View className="flex-row items-center gap-3">
          <View className="h-12 w-12 rounded-full overflow-hidden border-2 border-surface-highlight">
            <Image
              source={{ uri: "https://i.pravatar.cc/150?img=32" }}
              className="w-full h-full"
            />
          </View>
          <View>
            <Caption className="text-text-dim text-[10px] font-bold uppercase tracking-wide">
              GOOD MORNING
            </Caption>
            <H2 className="text-lg font-bold mb-0">Sarah Miller</H2>
          </View>
        </View>
        <View className="flex-row gap-3">
          <TouchableOpacity className="h-10 w-10 rounded-full bg-surface-dark border border-white/5 items-center justify-center">
            <Bell size={20} color="#9CA3AF" />
          </TouchableOpacity>
          <TouchableOpacity className="h-10 w-10 rounded-full bg-surface-dark border border-white/5 items-center justify-center">
            <Search size={20} color="#9CA3AF" />
          </TouchableOpacity>
        </View>
      </View>

      <StabilityScore />

      {/* Quick Actions Grid */}
      <View className="flex-row flex-wrap justify-between px-4 gap-y-6 mt-6 mb-6">
        <View className="w-[22%] items-center">
          <QuickAction
            icon={<Wallet size={24} color="#60A5FA" />}
            label="Income"
            onPress={() => openModal("income")}
          />
        </View>
        <View className="w-[22%] items-center">
          <QuickAction
            icon={<Receipt size={24} color="#F472B6" />}
            label="Expenses"
            onPress={() => openModal("expense")}
          />
        </View>
        <View className="w-[22%] items-center">
          <Link href="/(tabs)/savings" asChild>
            <QuickAction
              icon={<PiggyBank size={24} color="#C084FC" />}
              label="Savings"
            />
          </Link>
        </View>
        <View className="w-[22%] items-center">
          <Link href="/emergency-fund" asChild>
            <QuickAction
              icon={<Shield size={24} color="#D4E157" />}
              label="Emergency"
            />
          </Link>
        </View>
        <View className="w-[22%] items-center">
          <Link href="/insurance" asChild>
            <QuickAction
              icon={<Shield size={24} color="#3B82F6" />}
              label="Insurance"
            />
          </Link>
        </View>
        <View className="w-[22%] items-center">
          <Link href="/emis" asChild>
            <QuickAction
              icon={<Wallet size={24} color="#F97316" />}
              label="Loans"
            />
          </Link>
        </View>
        <View className="w-[22%] items-center">
          <Link href="/settings" asChild>
            <QuickAction
              icon={<Settings size={24} color="#A1A1AA" />}
              label="Settings"
            />
          </Link>
        </View>
        <View className="w-[22%] items-center">
          <Link href="/welcome" asChild>
            <QuickAction
              icon={<Sparkles size={24} color="#2bee6c" />}
              label="Welcome"
            />
          </Link>
        </View>
      </View>

      {/* Wealth Overview */}
      <View className="flex-row justify-between items-center mt-8 px-2 mb-2">
        <H2 className="text-base font-semibold mb-0">Your Wealth Overview</H2>
        <Caption className="text-primary font-medium">Edit Layout</Caption>
      </View>

      <Card variant="neutral" className="p-5 relative overflow-hidden group">
        <View className="absolute top-0 right-0 p-5 opacity-10">
          <Globe size={80} color="white" />
        </View>
        <View className="flex-row justify-between items-start mb-2">
          <View className="flex-row items-center gap-2">
            <View className="p-1.5 rounded-lg bg-emerald-500/10">
              <TrendingUp size={16} color="#10B981" />
            </View>
            <Caption className="text-zinc-400 font-semibold">Net Worth</Caption>
          </View>
          <View className="bg-emerald-500/10 px-2 py-1 rounded-lg">
            <Caption className="text-emerald-400 font-bold text-xs">
              +12% vs last month
            </Caption>
          </View>
        </View>
        <H2 className="text-3xl font-bold mt-2 mb-4">
          {formatCurrency(profile.netWorth || 24592)}
        </H2>
        <View className="flex-row gap-8">
          <View>
            <Caption className="text-[10px] uppercase font-bold text-text-dim mb-1">
              ASSETS
            </Caption>
            <Body className="font-medium text-surface-light">
              {formatCurrency(profile.totalAssets || 42100)}
            </Body>
          </View>
          <View>
            <Caption className="text-[10px] uppercase font-bold text-text-dim mb-1">
              LIABILITIES
            </Caption>
            <Body className="font-medium text-surface-light">
              {formatCurrency(profile.totalDebt || 17508)}
            </Body>
          </View>
        </View>
      </Card>

      {/* Grid: Spending & Connect */}
      <View className="flex-row gap-4 mt-2">
        {/* Spending Card */}
        <Card
          variant="neutral"
          className="flex-1 p-5 h-44 justify-between relative overflow-hidden"
        >
          <View className="absolute -right-4 -bottom-4 w-20 h-20 bg-accent-pink opacity-10 blur-xl rounded-full" />
          <View>
            <View className="flex-row items-center gap-2 mb-3">
              <View className="h-8 w-8 rounded-full bg-accent-pink/10 items-center justify-center">
                <ShoppingBag size={14} color="#F472B6" />
              </View>
              <Body className="text-sm font-semibold text-surface-light">
                Spending
              </Body>
            </View>
            <H2 className="text-xl font-bold">
              {formatCurrency(monthlyExpenses || 1240)}
            </H2>
            <Caption className="text-[10px] mt-1">Oct 1 - Oct 24</Caption>
          </View>
          <View className="w-full h-1.5 bg-zinc-800 rounded-full mt-2 overflow-hidden">
            <View className="h-full w-[85%] bg-accent-pink rounded-full" />
          </View>
        </Card>

        {/* Connect Savings Card - Dashed Border handled via style prop or specific className if configured, falling back to border-dashed style manually if needed */}
        <TouchableOpacity className="flex-1">
          <Card
            variant="glass"
            className="flex-1 h-44 justify-center items-center p-4 border-dashed border-2 border-zinc-700 active:bg-white/5"
          >
            <View className="h-10 w-10 rounded-full bg-zinc-800 items-center justify-center mb-1">
              <ListPlus size={20} color="#9CA3AF" />
            </View>
            <H2 className="text-sm font-bold text-zinc-300 text-center mb-0">
              Connect Savings
            </H2>
            <Caption className="text-[10px] text-center leading-3 mt-1">
              Link account to track emergency funds.
            </Caption>
          </Card>
        </TouchableOpacity>
      </View>

      {/* Insurance Card */}
      <Card
        variant="neutral"
        className="mt-4 p-5 bg-gradient-to-br from-surface-dark to-zinc-900 border-zinc-800"
      >
        <View className="flex-row justify-between items-start">
          <View className="flex-row items-center gap-3">
            <View className="p-2 rounded-xl bg-blue-500/10">
              <Shield size={20} color="#3B82F6" />
            </View>
            <View>
              <H2 className="text-sm font-bold mb-0">Insurance Coverage</H2>
              <Caption className="text-xs">Health & Life</Caption>
            </View>
          </View>
          <View className="px-2 py-1 rounded-md bg-yellow-500/10">
            <Caption className="text-yellow-500 text-[10px] font-bold uppercase tracking-wide">
              Review
            </Caption>
          </View>
        </View>

        <View className="mt-4 space-y-2">
          <View className="flex-row justify-between items-center">
            <Body className="text-sm text-zinc-300">Health Policy</Body>
            <View className="flex-row items-center gap-1.5">
              <View className="h-1.5 w-1.5 bg-emerald-500 rounded-full" />
              <Caption className="text-emerald-500 font-medium text-xs">
                Active
              </Caption>
            </View>
          </View>
          <View className="flex-row justify-between items-center">
            <Body className="text-sm text-zinc-300">Life Insurance</Body>
            <View className="flex-row items-center gap-1.5">
              <View className="h-1.5 w-1.5 bg-yellow-500 rounded-full" />
              <Caption className="text-yellow-500 font-medium text-xs">
                Pending
              </Caption>
            </View>
          </View>
        </View>
      </Card>

      <View className="h-24" />

      <AddTransactionModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        initialType={activeModalType}
      />
    </ScreenLayout>
  );
}

const QuickAction = forwardRef(({ icon, label, ...props }: any, ref: any) => {
  return (
    <Pressable
      ref={ref}
      className="items-center gap-2 group"
      hitSlop={8}
      {...props}
    >
      <View className="h-14 w-14 rounded-2xl bg-surface-dark border border-white/5 items-center justify-center shadow-sm group-active:bg-zinc-800">
        {icon}
      </View>
      <Caption className="text-[10px] font-medium text-text-dim">
        {label}
      </Caption>
    </Pressable>
  );
});
