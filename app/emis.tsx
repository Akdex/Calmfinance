import { Card } from "@/src/components/ui/Card";
import { ScreenLayout } from "@/src/components/ui/ScreenLayout";
import { Body, Caption, H1, H2 } from "@/src/components/ui/Typography";
import { useRouter } from "expo-router";
import {
  ArrowLeft,
  Car,
  CheckCircle,
  FilePlus,
  GraduationCap,
  Home,
  Plus,
  Sparkles,
  TrendingDown,
} from "lucide-react-native";
import { TouchableOpacity, View } from "react-native";

export default function EmisScreen() {
  const router = useRouter();

  return (
    <ScreenLayout scrollable>
      {/* Header */}
      <View className="flex-row justify-between items-center mt-6 mb-6 px-2">
        <View className="flex-row items-center gap-3">
          <TouchableOpacity
            onPress={() => router.back()}
            className="h-10 w-10 rounded-full hover:bg-white/10 items-center justify-center p-2"
          >
            <ArrowLeft size={24} color="#A1A1AA" />
          </TouchableOpacity>
          <H2 className="text-xl font-bold mb-0">EMIs & Loans</H2>
        </View>
        <TouchableOpacity className="h-10 w-10 rounded-full bg-surface-dark border border-white/5 items-center justify-center shadow-sm">
          <Plus size={20} color="#D4B483" />
        </TouchableOpacity>
      </View>

      {/* Hero Card */}
      <Card variant="neutral" className="p-6 relative overflow-hidden mb-8">
        <View className="absolute -top-20 -right-20 w-64 h-64 bg-[#D4B483]/20 blur-3xl rounded-full pointer-events-none" />
        <View className="absolute -bottom-20 -left-20 w-48 h-48 bg-indigo-500/10 blur-3xl rounded-full pointer-events-none" />

        <View className="relative z-10">
          <View className="flex-row justify-between items-start mb-4">
            <View>
              <Caption className="text-zinc-500 font-medium uppercase tracking-wider">
                Total Monthly EMI
              </Caption>
              <View className="flex-row items-baseline">
                <H1 className="text-4xl font-bold mt-1 text-[#D4B483] mb-0">
                  $2,450
                </H1>
                <Caption className="text-lg text-zinc-500 font-normal">
                  .00
                </Caption>
              </View>
            </View>
            <View className="h-12 w-12 rounded-full bg-black/20 items-center justify-center border border-white/10">
              <TrendingDown size={24} color="#34D399" />
            </View>
          </View>

          <View className="space-y-2">
            <View className="flex-row justify-between">
              <Caption className="text-zinc-500 font-medium text-xs">
                EMI to Income Ratio
              </Caption>
              <Caption className="text-emerald-400 font-medium text-xs">
                Healthy (28%)
              </Caption>
            </View>
            <View className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
              <View className="h-full bg-gradient-to-r from-[#D4B483] to-emerald-400 w-[28%] rounded-full" />
            </View>
            <Caption className="text-zinc-500 text-[10px] leading-4 mt-1">
              Your debt-to-income ratio is healthy. You're utilizing 28% of your
              monthly income for debt repayment.
            </Caption>
          </View>
        </View>
      </Card>

      {/* Action Grid */}
      <View className="flex-row gap-4 mb-8">
        <TouchableOpacity className="flex-1 p-4 rounded-2xl bg-surface-dark border border-dashed border-zinc-700 items-center justify-center gap-2 active:border-[#D4B483]">
          <View className="h-10 w-10 rounded-full bg-[#D4B483]/10 items-center justify-center">
            <FilePlus size={20} color="#D4B483" />
          </View>
          <Caption className="font-medium text-zinc-300">Manual Entry</Caption>
        </TouchableOpacity>
        <TouchableOpacity className="flex-1 p-4 rounded-2xl bg-surface-dark border border-dashed border-zinc-700 items-center justify-center gap-2 active:border-purple-400">
          <View className="h-10 w-10 rounded-full bg-purple-500/10 items-center justify-center">
            <Sparkles size={20} color="#A78BFA" />
          </View>
          <Caption className="font-medium text-zinc-300">AI Detect</Caption>
        </TouchableOpacity>
      </View>

      {/* Active Loans */}
      <View className="mb-8">
        <View className="flex-row justify-between items-end px-1 mb-4">
          <H2 className="text-lg font-semibold mb-0">Active Loans</H2>
          <TouchableOpacity>
            <Caption className="text-[#D4B483] font-medium underline">
              View All
            </Caption>
          </TouchableOpacity>
        </View>

        {/* Home Loan */}
        <Card variant="neutral" className="p-5 mb-4 relative overflow-hidden">
          <View className="absolute right-0 top-0 w-24 h-24 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-bl-full pointer-events-none" />
          <View className="flex-row justify-between items-start mb-4">
            <View className="flex-row items-center gap-3">
              <View className="h-10 w-10 rounded-xl bg-indigo-500/10 items-center justify-center">
                <Home size={20} color="#818CF8" />
              </View>
              <View>
                <Body className="font-semibold text-base leading-5">
                  Home Loan
                </Body>
                <Caption className="text-[10px] text-zinc-500">
                  Citibank • Ends 2045
                </Caption>
              </View>
            </View>
            <View className="items-end">
              <Body className="font-bold text-lg">$1,850</Body>
              <Caption className="text-[10px] text-zinc-500">/ month</Caption>
            </View>
          </View>
          <View className="flex-row border-t border-b border-white/5 py-3 mb-3">
            <View className="flex-1">
              <Caption className="text-[10px] uppercase font-bold text-zinc-500 mb-0.5">
                Interest
              </Caption>
              <Body className="text-sm font-semibold">3.5%</Body>
            </View>
            <View className="flex-1">
              <Caption className="text-[10px] uppercase font-bold text-zinc-500 mb-0.5">
                Remaining
              </Caption>
              <Body className="text-sm font-semibold">21 yrs</Body>
            </View>
            <View className="flex-1 items-end">
              <Caption className="text-[10px] uppercase font-bold text-zinc-500 mb-0.5">
                Next Due
              </Caption>
              <Body className="text-sm font-semibold text-indigo-400">
                Oct 05
              </Body>
            </View>
          </View>
          <View className="h-1.5 w-full bg-black/30 rounded-full overflow-hidden">
            <View className="h-full bg-indigo-400 w-[15%] rounded-full" />
          </View>
        </Card>

        {/* Car Loan */}
        <Card variant="neutral" className="p-5 mb-4 relative overflow-hidden">
          <View className="absolute right-0 top-0 w-24 h-24 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-bl-full pointer-events-none" />
          <View className="flex-row justify-between items-start mb-4">
            <View className="flex-row items-center gap-3">
              <View className="h-10 w-10 rounded-xl bg-purple-500/10 items-center justify-center">
                <Car size={20} color="#A78BFA" />
              </View>
              <View>
                <Body className="font-semibold text-base leading-5">
                  Tesla Model 3
                </Body>
                <Caption className="text-[10px] text-zinc-500">
                  Tesla Finance • Ends 2026
                </Caption>
              </View>
            </View>
            <View className="items-end">
              <Body className="font-bold text-lg">$600</Body>
              <Caption className="text-[10px] text-zinc-500">/ month</Caption>
            </View>
          </View>
          <View className="flex-row border-t border-b border-white/5 py-3 mb-3">
            <View className="flex-1">
              <Caption className="text-[10px] uppercase font-bold text-zinc-500 mb-0.5">
                Interest
              </Caption>
              <Body className="text-sm font-semibold">4.2%</Body>
            </View>
            <View className="flex-1">
              <Caption className="text-[10px] uppercase font-bold text-zinc-500 mb-0.5">
                Remaining
              </Caption>
              <Body className="text-sm font-semibold">3 yrs</Body>
            </View>
            <View className="flex-1 items-end">
              <Caption className="text-[10px] uppercase font-bold text-zinc-500 mb-0.5">
                Next Due
              </Caption>
              <Body className="text-sm font-semibold text-purple-400">
                Oct 12
              </Body>
            </View>
          </View>
          <View className="h-1.5 w-full bg-black/30 rounded-full overflow-hidden">
            <View className="h-full bg-purple-400 w-[45%] rounded-full" />
          </View>
        </Card>

        {/* Student Loan (Closed) */}
        <Card variant="neutral" className="p-5 opacity-80">
          <View className="flex-row justify-between items-start mb-4">
            <View className="flex-row items-center gap-3">
              <View className="h-10 w-10 rounded-xl bg-white/5 items-center justify-center">
                <GraduationCap size={20} color="#A1A1AA" />
              </View>
              <View>
                <Body className="font-semibold text-base leading-5">
                  Student Loan
                </Body>
                <Caption className="text-[10px] text-zinc-500">
                  Navient • Paid off
                </Caption>
              </View>
            </View>
            <View className="flex-row items-center gap-1 bg-emerald-500/10 px-2 py-1 rounded-md">
              <CheckCircle size={14} color="#34D399" />
              <Caption className="text-emerald-400 font-bold text-xs">
                Closed
              </Caption>
            </View>
          </View>
          <View className="h-1.5 w-full bg-black/30 rounded-full overflow-hidden">
            <View className="h-full bg-emerald-400 w-full rounded-full" />
          </View>
        </Card>
      </View>
    </ScreenLayout>
  );
}
