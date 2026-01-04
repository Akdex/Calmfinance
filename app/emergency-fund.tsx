import { Card } from "@/src/components/ui/Card";
import { ScreenLayout } from "@/src/components/ui/ScreenLayout";
import { Body, Caption, H1, H2 } from "@/src/components/ui/Typography";
import { cn } from "@/src/lib/utils";
import { useRouter } from "expo-router";
import {
  ArrowLeft,
  Car,
  Home,
  Info,
  MoreHorizontal,
  Plus,
  Rocket,
  Scale,
  Shield,
  ShoppingBasket,
} from "lucide-react-native";
import { TouchableOpacity, View } from "react-native";

export default function EmergencyFundScreen() {
  const router = useRouter();

  return (
    <ScreenLayout scrollable>
      {/* Header */}
      <View className="flex-row justify-between items-center mt-6 mb-6 px-2">
        <TouchableOpacity
          onPress={() => router.back()}
          className="h-10 w-10 rounded-full bg-surface-dark border border-white/5 items-center justify-center active:bg-zinc-800"
        >
          <ArrowLeft size={24} color="#A1A1AA" />
        </TouchableOpacity>
        <H2 className="text-lg font-semibold mb-0">Emergency Fund</H2>
        <TouchableOpacity className="h-10 w-10 rounded-full bg-surface-dark border border-white/5 items-center justify-center active:bg-zinc-800">
          <MoreHorizontal size={24} color="#A1A1AA" />
        </TouchableOpacity>
      </View>

      {/* Balance Card */}
      <Card
        variant="neutral"
        className="p-6 mb-8 bg-surface-dark border-zinc-800"
      >
        <View className="flex-row justify-between items-start mb-2">
          <Caption className="text-zinc-400 font-medium">
            Current Balance
          </Caption>
          <View className="bg-lime-900/20 px-3 py-1 rounded-full border border-lime-500/20">
            <Caption className="text-[#D4E157] text-[10px] font-bold uppercase tracking-wide">
              Healthy
            </Caption>
          </View>
        </View>
        <H1 className="text-4xl font-bold mb-6 text-white tracking-tight">
          $8,450.00
        </H1>
        <View className="flex-row justify-between items-end mb-2">
          <View className="bg-zinc-800 px-3 py-1 rounded-lg">
            <Caption className="text-[#D4E157] text-xs font-bold uppercase tracking-wider">
              Progress
            </Caption>
          </View>
          <Body className="text-[#D4E157] font-bold text-sm">72%</Body>
        </View>
        <View className="w-full bg-zinc-700 rounded-full h-3 mb-4 overflow-hidden">
          <View
            className="bg-[#D4E157] h-3 rounded-full shadow-[0_0_15px_rgba(212,225,87,0.3)]"
            style={{ width: "72%" }}
          />
        </View>
        <View className="flex-row justify-between text-xs items-center">
          <View className="flex-row items-center gap-2">
            <View className="w-2 h-2 rounded-full bg-[#D4E157]" />
            <Caption className="text-zinc-400 font-medium">Current</Caption>
          </View>
          <View className="flex-row items-center gap-2">
            <View className="w-2 h-2 rounded-full border border-zinc-500" />
            <Caption className="text-zinc-400 font-medium">
              Target: $11,700
            </Caption>
          </View>
        </View>
      </Card>

      {/* Savings Strategy */}
      <View className="mb-8">
        <View className="flex-row justify-between items-end mb-4 px-1">
          <H2 className="text-lg font-semibold mb-0">Savings Strategy</H2>
          <Caption className="text-xs text-zinc-500">
            Based on Freelance Income
          </Caption>
        </View>
        <View className="flex-row gap-3">
          <StrategyCard
            icon={<Shield size={24} color="#60A5FA" />}
            title="Conservative"
            subtitle="6 Months"
          />
          <StrategyCard
            icon={<Scale size={24} color="#18181B" />}
            title="Balanced"
            subtitle="4 Months"
            active
          />
          <StrategyCard
            icon={<Rocket size={24} color="#F87171" />}
            title="Aggressive"
            subtitle="2 Months"
          />
        </View>
      </View>

      {/* Why 4 Months Insight */}
      <View className="bg-[#09090B] rounded-[2rem] p-6 border border-zinc-800 relative overflow-hidden mb-8 shadow-xl">
        <View className="absolute -top-10 -right-10 w-32 h-32 bg-zinc-800/20 rounded-full blur-2xl" />

        <View className="flex-row items-center gap-2 mb-3 relative z-10">
          <Info size={18} color="#D4E157" strokeWidth={2.5} />
          <Body className="font-bold text-base text-white mb-0">
            Why 4 months?
          </Body>
        </View>
        <Body className="text-sm text-zinc-400 leading-6 mb-6 relative z-10 font-normal">
          Since your income fluctuates as a{" "}
          <Body className="text-white font-bold">freelancer</Body>, a 4-month
          buffer covers essentials during slower periods without locking away
          too much capital.
        </Body>
        <Body className="text-[#D4E157] text-lg font-mono font-medium relative z-10">
          $2,925{" "}
          <Caption className="text-zinc-600 font-sans text-sm">
            / mo expenses
          </Caption>
        </Body>
      </View>

      {/* Monthly Breakdown */}
      <View className="mb-32">
        <H2 className="text-lg font-semibold mb-4 px-1">Monthly Breakdown</H2>
        <View className="bg-surface-dark rounded-2xl border border-zinc-800 overflow-hidden divide-y divide-zinc-800">
          <BreakdownItem
            icon={<Home size={20} color="#2563EB" />}
            bg="bg-blue-900/20"
            color="text-blue-500"
            title="Housing & Bills"
            type="Essential"
            amount="$1,450"
          />
          <BreakdownItem
            icon={<ShoppingBasket size={20} color="#EA580C" />}
            bg="bg-orange-900/20"
            color="text-orange-500"
            title="Groceries"
            type="Variable"
            amount="$600"
          />
          <BreakdownItem
            icon={<Car size={20} color="#9333EA" />}
            bg="bg-purple-900/20"
            color="text-purple-500"
            title="Transport"
            type="Essential"
            amount="$350"
          />
        </View>
      </View>

      {/* Floating Action Button */}
      <View className="absolute bottom-10 left-6 right-6 z-20">
        <TouchableOpacity className="w-full bg-[#D4E157]/10 border border-[#D4E157] py-4 rounded-3xl flex-row items-center justify-center gap-2 active:bg-[#D4E157]/20 backdrop-blur-md">
          <Plus size={20} color="#D4E157" />
          <Body className="text-[#D4E157] font-semibold">
            Add to Emergency Fund
          </Body>
        </TouchableOpacity>
      </View>
    </ScreenLayout>
  );
}

function StrategyCard({ icon, title, subtitle, active }: any) {
  return (
    <TouchableOpacity
      className={cn(
        "flex-1 p-4 rounded-2xl border items-center justify-center gap-2",
        active
          ? "bg-[#D4E157] border-[#D4E157]"
          : "bg-surface-dark border-zinc-800 active:bg-zinc-800"
      )}
    >
      {active && (
        <View className="absolute -top-3 bg-[#D4E157] px-2 py-0.5 rounded-full border border-black/10 shadow-sm">
          <Caption className="text-black text-[10px] font-bold uppercase">
            Recommended
          </Caption>
        </View>
      )}
      <View className="mb-1">{icon}</View>
      <View className="items-center">
        <Body
          className={cn(
            "text-sm font-bold mb-0.5",
            active ? "text-black" : "text-zinc-300"
          )}
        >
          {title}
        </Body>
        <Caption
          className={cn("text-xs", active ? "text-black/60" : "text-zinc-500")}
        >
          {subtitle}
        </Caption>
      </View>
    </TouchableOpacity>
  );
}

function BreakdownItem({ icon, bg, color, title, type, amount }: any) {
  return (
    <TouchableOpacity className="p-4 flex-row justify-between items-center active:bg-white/5">
      <View className="flex-row items-center gap-4">
        <View
          className={cn(
            "w-10 h-10 rounded-full items-center justify-center",
            bg,
            color
          )}
        >
          {icon}
        </View>
        <View>
          <Body className="font-medium text-sm text-zinc-200 mb-0.5">
            {title}
          </Body>
          <Caption className="text-xs text-zinc-500">{type}</Caption>
        </View>
      </View>
      <Body className="font-semibold text-white">{amount}</Body>
    </TouchableOpacity>
  );
}
