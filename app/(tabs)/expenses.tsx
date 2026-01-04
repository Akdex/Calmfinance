import { AddTransactionModal } from "@/src/components/features/AddTransactionModal";
import { Card } from "@/src/components/ui/Card";
import { ScreenLayout } from "@/src/components/ui/ScreenLayout";
import { Body, Caption, H2 } from "@/src/components/ui/Typography";
import { cn } from "@/src/lib/utils";
import { useTransactionStore } from "@/src/store/useTransactionStore";
import { useState } from "react";
import { View } from "react-native";
import { useShallow } from "zustand/react/shallow";

import { H1 } from "@/src/components/ui/Typography";
import {
  ArrowLeft,
  Car,
  Home,
  Info,
  MoreHorizontal,
  Rocket,
  Scale,
  Shield,
  ShoppingBasket,
} from "lucide-react-native";
import { TouchableOpacity } from "react-native";

export default function ExpensesScreen() {
  const [isModalVisible, setModalVisible] = useState(false);
  const transactions = useTransactionStore(
    useShallow((state) => state.transactions)
  );

  // Hardcoded for demo matching reference
  const currentBalance = 8450.0;
  const target = 11700.0;
  const progress = 72;

  return (
    <ScreenLayout scrollable>
      {/* Header */}
      <View className="flex-row justify-between items-center mt-6 mb-8">
        <TouchableOpacity className="w-10 h-10 rounded-full bg-surface-dark border border-white/5 items-center justify-center">
          <ArrowLeft size={20} color="#9CA3AF" />
        </TouchableOpacity>
        <H2 className="text-lg font-semibold tracking-wide mb-0 text-surface-light">
          Expenses & Fund
        </H2>
        <TouchableOpacity className="w-10 h-10 rounded-full bg-surface-dark border border-white/5 items-center justify-center">
          <MoreHorizontal size={20} color="#9CA3AF" />
        </TouchableOpacity>
      </View>

      {/* Main Card */}
      <Card variant="neutral" className="p-6 bg-surface-dark border-white/5">
        <View className="flex-row justify-between items-start mb-2">
          <Caption className="text-zinc-400 font-medium">
            Emergency Fund
          </Caption>
          <View className="bg-primary/20 px-3 py-1 rounded-full">
            <Caption className="text-primary text-[10px] font-bold uppercase tracking-wide">
              Healthy
            </Caption>
          </View>
        </View>
        <H1 className="text-4xl font-bold mb-6 text-surface-light">
          ${currentBalance.toLocaleString()}
        </H1>
        <View className="flex-row justify-between items-end mb-2">
          <View className="bg-surface-highlight px-3 py-1 rounded-lg">
            <Caption className="text-primary text-[10px] font-bold uppercase tracking-wider">
              Progress
            </Caption>
          </View>
          <Caption className="text-primary font-bold">{progress}%</Caption>
        </View>

        <View className="w-full bg-zinc-800 rounded-full h-3 mb-4 overflow-hidden">
          <View
            className="bg-primary h-3 rounded-full shadow-[0_0_15px_rgba(212,255,157,0.3)]"
            style={{ width: `${progress}%` }}
          />
        </View>

        <View className="flex-row justify-between items-center">
          <View className="flex-row items-center gap-2">
            <View className="w-2 h-2 rounded-full bg-primary" />
            <Caption className="text-xs font-medium text-zinc-500">
              Current
            </Caption>
          </View>
          <View className="flex-row items-center gap-2">
            <View className="w-2 h-2 rounded-full border border-zinc-500" />
            <Caption className="text-xs font-medium text-zinc-500">
              Target: ${target.toLocaleString()}
            </Caption>
          </View>
        </View>
      </Card>

      {/* Strategy Section */}
      <View className="mb-6">
        <View className="flex-row justify-between items-end mb-4">
          <H2 className="text-lg font-semibold text-surface-light mb-0">
            Savings Strategy
          </H2>
          <Caption className="text-xs text-zinc-500">Based on Income</Caption>
        </View>
        <View className="flex-row gap-3">
          <StrategyCard
            icon={<Shield size={24} color="#60A5FA" />}
            label="Conservative"
            duration="6 Months"
          />
          <StrategyCard
            icon={<Scale size={24} color="#D4FF9D" />}
            label="Balanced"
            duration="4 Months"
            active
          />
          <StrategyCard
            icon={<Rocket size={24} color="#F87171" />}
            label="Aggressive"
            duration="2 Months"
          />
        </View>
      </View>

      {/* Info Card */}
      <View className="bg-surface-dark border border-white/5 rounded-2xl p-5 relative overflow-hidden mb-6">
        <Info
          size={80}
          color="white"
          className="absolute -top-2 -right-2 opacity-5 rotate-12"
        />

        <View className="flex-row items-center gap-2 mb-3 z-10">
          <Info size={16} color="#D4FF9D" />
          <Body className="font-semibold text-sm text-white">
            Why 4 months?
          </Body>
        </View>
        <Body className="text-sm text-zinc-300 leading-relaxed mb-4 z-10">
          Since your income fluctuates as a{" "}
          <Body className="text-white font-medium text-sm">freelancer</Body>, a
          4-month buffer covers essentials during slower periods.
        </Body>
        <Body className="text-primary text-sm font-mono z-10">
          $2,925 <Body className="text-zinc-400 text-sm">/ mo expenses</Body>
        </Body>
      </View>

      {/* Monthly Breakdown */}
      <View className="mb-32">
        <H2 className="text-lg font-semibold mb-4 text-surface-light">
          Monthly Breakdown
        </H2>
        <View className="bg-surface-dark rounded-2xl border border-white/5 overflow-hidden">
          <BreakdownItem
            icon={<Home size={20} color="#60A5FA" />}
            bg="bg-blue-500/10"
            label="Housing & Bills"
            sub="Essential"
            amount="$1,450"
          />
          <View className="h-px bg-white/5 mx-4" />
          <BreakdownItem
            icon={<ShoppingBasket size={20} color="#F97316" />}
            bg="bg-orange-500/10"
            label="Groceries"
            sub="Variable"
            amount="$600"
          />
          <View className="h-px bg-white/5 mx-4" />
          <BreakdownItem
            icon={<Car size={20} color="#C084FC" />}
            bg="bg-purple-500/10"
            label="Transport"
            sub="Essential"
            amount="$350"
          />
        </View>
      </View>

      {/* Floating Add Button */}
      <View className="absolute bottom-6 left-6 right-6">
        <TouchableOpacity
          className="w-full bg-surface-highlight border border-primary py-4 rounded-3xl shadow-lg flex-row items-center justify-center gap-2 active:scale-95"
          onPress={() => setModalVisible(true)}
        >
          <Body className="text-primary font-semibold">
            Add to Emergency Fund
          </Body>
        </TouchableOpacity>
      </View>

      <AddTransactionModal
        visible={isModalVisible}
        onClose={() => setModalVisible(false)}
      />
    </ScreenLayout>
  );
}

function StrategyCard({ icon, label, duration, active }: any) {
  return (
    <TouchableOpacity
      className={cn(
        "flex-1 p-4 pt-6 rounded-2xl border items-center justify-center gap-2 relative",
        active
          ? "bg-surface-highlight border-primary shadow-[0_0_10px_rgba(212,255,157,0.1)]"
          : "bg-surface-dark border-white/5"
      )}
    >
      {active && (
        <View className="absolute -top-3 left-0 right-0 items-center z-10">
          <View className="bg-primary px-3 py-1 rounded-full shadow-sm">
            <Caption
              className="text-black text-[9px] font-extrabold uppercase tracking-wide text-center"
              numberOfLines={1}
            >
              Recommended
            </Caption>
          </View>
        </View>
      )}
      {icon}
      <Body
        className={cn(
          "text-sm font-medium",
          active ? "text-white" : "text-zinc-400"
        )}
      >
        {label}
      </Body>
      <Caption className="text-[10px] text-zinc-500">{duration}</Caption>
    </TouchableOpacity>
  );
}

function BreakdownItem({ icon, bg, label, sub, amount }: any) {
  return (
    <TouchableOpacity className="p-4 flex-row items-center justify-between hover:bg-white/5 active:bg-white/5">
      <View className="flex-row items-center gap-4">
        <View
          className={cn(
            "w-10 h-10 rounded-full items-center justify-center",
            bg
          )}
        >
          {icon}
        </View>
        <View>
          <Body className="font-medium text-sm text-surface-light">
            {label}
          </Body>
          <Caption className="text-xs text-zinc-500">{sub}</Caption>
        </View>
      </View>
      <Body className="font-semibold text-surface-light">{amount}</Body>
    </TouchableOpacity>
  );
}
