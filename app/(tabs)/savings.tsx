import { Card } from "@/src/components/ui/Card";
import { ScreenLayout } from "@/src/components/ui/ScreenLayout";
import { Body, Caption, H1, H2 } from "@/src/components/ui/Typography";
import { cn } from "@/src/lib/utils";
import { useFinancialStore } from "@/src/store/useFinancialStore";
import {
  ArrowUpRight,
  BarChart,
  DollarSign,
  Lock,
  PieChart,
  TrendingUp,
} from "lucide-react-native";
import { ScrollView, TouchableOpacity, View } from "react-native";
import Svg, {
  Circle,
  Defs,
  Line,
  LinearGradient,
  Path,
  Stop,
} from "react-native-svg";
import { useShallow } from "zustand/react/shallow";

export default function InvestmentsScreen() {
  const profile = useFinancialStore(useShallow((state) => state.profile));

  const formatCurrency = (amount: number) => {
    return `${profile.currency}${amount.toLocaleString()}`;
  };

  return (
    <ScreenLayout scrollable>
      {/* Header */}
      <View className="flex-row justify-between items-center mt-6 mb-8">
        <View>
          <Caption className="text-zinc-400 font-medium tracking-wide">
            Welcome back
          </Caption>
          <H2 className="font-bold text-3xl text-surface-light mb-0">
            Investments
          </H2>
        </View>
        <TouchableOpacity className="h-12 w-12 rounded-full bg-surface-dark items-center justify-center border border-white/10 active:bg-zinc-800">
          <View className="relative">
            <View className="absolute top-0 right-0 w-2 h-2 bg-accent-red rounded-full z-10 border border-surface-dark" />
            <Caption className="text-2xl">🔔</Caption>
          </View>
        </TouchableOpacity>
      </View>

      {/* Net Worth Card */}
      <Card
        variant="neutral"
        className="bg-surface-dark p-6 relative overflow-hidden border-white/5 shadow-2xl"
      >
        <View className="absolute -top-10 -right-10 w-48 h-48 bg-invest-primary opacity-10 rounded-full blur-[80px]" />

        <View className="flex-row justify-between items-start mb-6 z-10">
          <View>
            <Caption className="text-zinc-400 font-medium mb-1">
              Total Net Worth
            </Caption>
            <H1 className="text-5xl font-bold text-surface-light tracking-tight">
              {formatCurrency(142850)}
            </H1>
            <Caption className="text-sm text-zinc-500 mt-1">
              Investment Growth (Last 6 Months)
            </Caption>
          </View>
          <View className="px-3 py-1.5 bg-green-900/20 rounded-full flex-row items-center gap-1.5 border border-green-500/20">
            <TrendingUp size={14} color="#4ADE80" />
            <Caption className="text-green-400 font-bold text-xs">
              +12.4%
            </Caption>
          </View>
        </View>

        {/* Chart Improvements - More visible gradient and lines */}
        <View className="h-48 w-full mb-8 relative">
          {/* Chart Area */}
          <View className="absolute inset-0">
            <Svg height="100%" width="100%" viewBox="0 0 320 160">
              <Defs>
                <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                  <Stop offset="0" stopColor="#2DD4BF" stopOpacity="0.2" />
                  <Stop offset="1" stopColor="#2DD4BF" stopOpacity="0" />
                </LinearGradient>
              </Defs>
              {/* Dashed Grid Lines - refined opacity */}
              <Line
                x1="0"
                y1="40"
                x2="320"
                y2="40"
                stroke="rgba(255,255,255,0.05)"
                strokeDasharray="4 4"
                strokeWidth="1"
              />
              <Line
                x1="0"
                y1="80"
                x2="320"
                y2="80"
                stroke="rgba(255,255,255,0.05)"
                strokeDasharray="4 4"
                strokeWidth="1"
              />
              <Line
                x1="0"
                y1="120"
                x2="320"
                y2="120"
                stroke="rgba(255,255,255,0.05)"
                strokeDasharray="4 4"
                strokeWidth="1"
              />

              {/* Gradient Fill - Matching the curve */}
              <Path
                d="M0 160 L0 130 C40 120 100 110 160 90 C220 70 280 40 320 30 L320 160 Z"
                fill="url(#grad)"
              />

              {/* The Line - Smooth Bezier Curve matching screenshot */}
              <Path
                d="M0 130 C40 120 100 110 160 90 C220 70 280 40 320 30"
                fill="none"
                stroke="#2DD4BF"
                strokeWidth="4"
                strokeLinecap="round"
              />

              {/* Data Point Marker - Circle with inner dot */}
              <Circle
                cx="160"
                cy="90"
                r="6"
                fill="#18181B"
                stroke="#2DD4BF"
                strokeWidth="3"
              />
              <Circle
                cx="320"
                cy="30"
                r="6"
                fill="#18181B"
                stroke="#2DD4BF"
                strokeWidth="3"
              />
            </Svg>
          </View>
        </View>

        <View className="flex-row justify-between px-2 mb-8">
          {["JAN", "FEB", "MAR", "APR", "MAY", "JUN"].map((m) => (
            <Caption
              key={m}
              className="text-[10px] font-bold text-zinc-500 tracking-wider"
            >
              {m}
            </Caption>
          ))}
        </View>

        <View className="flex-row gap-6">
          <View className="flex-row items-center gap-2">
            <View className="w-2 h-2 rounded-full bg-invest-primary shadow-[0_0_8px_#3DE0C4]" />
            <Caption className="text-xs text-zinc-300 font-medium">
              Assets:{" "}
              <Body className="text-xs font-bold text-surface-light">
                $185k
              </Body>
            </Caption>
          </View>
          <View className="flex-row items-center gap-2">
            <View className="w-2 h-2 rounded-full bg-accent-pink shadow-[0_0_8px_#F472B6]" />
            <Caption className="text-xs text-zinc-300 font-medium">
              Liabilities:{" "}
              <Body className="text-xs font-bold text-surface-light">$42k</Body>
            </Caption>
          </View>
        </View>
      </Card>

      {/* Add Assets Scroll - Increased Spacing */}
      <View className="mt-10 mb-8">
        <Caption className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4 ml-1">
          Add Assets
        </Caption>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerClassName="gap-4 px-1"
        >
          <AssetAction
            icon={<BarChart size={24} color="#60A5FA" />}
            label="Stocks"
            color="bg-blue-500/10"
          />
          <AssetAction
            icon={<PieChart size={24} color="#C084FC" />}
            label="Mutual Fund"
            color="bg-purple-500/10"
          />
          <AssetAction
            icon={<DollarSign size={24} color="#F97316" />}
            label="FD / EPF"
            color="bg-orange-500/10"
          />
          <View className="w-4" />
        </ScrollView>
      </View>

      {/* Asset Allocation - Improved Layout */}
      <Card
        variant="neutral"
        className="mb-8 p-6 bg-surface-dark border-white/5"
      >
        <View className="flex-row justify-between items-center mb-6">
          <Caption className="text-sm font-bold text-zinc-400 uppercase tracking-wide">
            Asset Allocation
          </Caption>
          <Caption className="text-xs font-bold text-invest-primary">
            Analysis
          </Caption>
        </View>

        <View className="flex-row items-center gap-8">
          {/* Donut Chart visual improvement */}
          <View className="w-32 h-32 rounded-full border-[16px] border-zinc-800 relative items-center justify-center shadow-inner">
            <View className="absolute w-full h-full rounded-full border-[16px] border-invest-primary border-t-transparent border-l-transparent rotate-45 opacity-90" />
            <View className="absolute w-full h-full rounded-full border-[16px] border-accent-purple border-b-transparent border-r-transparent rotate-12 opacity-80" />

            <View className="items-center justify-center bg-surface-dark w-20 h-20 rounded-full shadow-lg">
              <Caption className="text-[10px] text-zinc-500 font-bold mb-0.5">
                TOTAL
              </Caption>
              <Body className="font-bold text-lg text-surface-light">100%</Body>
            </View>
          </View>

          <View className="flex-1 gap-4">
            <AllocationRow label="Stocks" percent="45%" color="bg-blue-500" />
            <AllocationRow
              label="Mutual Funds"
              percent="30%"
              color="bg-purple-500"
            />
            <AllocationRow label="EPF & RE" percent="15%" color="bg-pink-500" />
            <AllocationRow
              label="Cash"
              percent="10%"
              color="bg-invest-primary"
            />
          </View>
        </View>
      </Card>

      {/* AI Insight */}
      <Card
        variant="prominent"
        className="mb-10 p-6 bg-zinc-900 border-invest-primary/20 relative overflow-hidden"
      >
        <View className="absolute top-0 right-0 w-48 h-48 bg-accent-purple opacity-10 blur-3xl rounded-full" />
        <View className="flex-row items-center gap-2 mb-3">
          <View className="w-1.5 h-4 bg-accent-purple rounded-full" />
          <Caption className="text-accent-purple font-bold uppercase text-[10px] tracking-widest">
            AI Insight
          </Caption>
        </View>
        <Body className="text-base text-zinc-300 leading-7 mb-4 font-normal">
          Your portfolio is slightly heavy on debt instruments (45%). Increasing
          equity exposure via SIPs could boost growth by{" "}
          <Body className="text-green-400 font-bold">~3-4%</Body>.
        </Body>
        <TouchableOpacity className="flex-row items-center gap-1.5 active:opacity-70">
          <Caption className="text-blue-400 font-bold text-xs uppercase tracking-wide">
            Read detailed analysis
          </Caption>
          <ArrowUpRight size={14} color="#60A5FA" />
        </TouchableOpacity>
      </Card>

      {/* Asset List */}
      <View className="mb-4 px-1 flex-row justify-between items-end">
        <Caption className="text-xs font-bold text-zinc-500 uppercase tracking-widest">
          Your Assets
        </Caption>
        <Caption className="text-xs font-medium text-zinc-500">
          View All
        </Caption>
      </View>

      <View className="gap-4 mb-32">
        <AssetItem
          icon={<TrendingUp size={24} color="#60A5FA" />}
          bg="bg-blue-500/10"
          title="US Stocks"
          subtitle="Apple, Tesla, NVDA"
          amount="$42,500"
          change="+2.1%"
        />
        <AssetItem
          icon={<PieChart size={24} color="#C084FC" />}
          bg="bg-purple-500/10"
          title="Mutual Funds (SIP)"
          subtitle="Monthly Auto-debit"
          amount="$28,300"
          change="+5.4%"
        />
        <AssetItem
          icon={<Lock size={24} color="#F97316" />}
          bg="bg-orange-500/10"
          title="Provident Fund"
          subtitle="Retirement Corpus"
          amount="$15,200"
          change="Fixed"
          changeColor="text-zinc-500"
        />
      </View>
    </ScreenLayout>
  );
}

function AssetAction({
  icon,
  label,
  color,
}: {
  icon: any;
  label: string;
  color: string;
}) {
  // Increased size and improved styling
  return (
    <TouchableOpacity className="bg-surface-dark border border-white/5 p-4 rounded-[2rem] w-32 h-32 items-center justify-center gap-3 active:bg-white/5 shadow-lg">
      <View
        className={cn(
          "w-12 h-12 rounded-full items-center justify-center",
          color
        )}
      >
        {icon}
      </View>
      <Caption className="text-sm font-semibold text-zinc-300">{label}</Caption>
    </TouchableOpacity>
  );
}

function AllocationRow({
  label,
  percent,
  color,
}: {
  label: string;
  percent: string;
  color: string;
}) {
  return (
    <View className="flex-row justify-between items-center py-1">
      <View className="flex-row items-center gap-3">
        <View className={cn("w-2.5 h-2.5 rounded-full shadow-sm", color)} />
        <Caption className="text-zinc-300 text-sm font-medium">{label}</Caption>
      </View>
      <Caption className="text-surface-light font-bold text-sm">
        {percent}
      </Caption>
    </View>
  );
}

function AssetItem({
  icon,
  bg,
  title,
  subtitle,
  amount,
  change,
  changeColor = "text-green-400",
}: any) {
  return (
    <View className="bg-surface-dark p-5 rounded-[2rem] border border-white/5 flex-row items-center justify-between active:bg-zinc-800/50">
      <View className="flex-row items-center gap-5">
        <View
          className={cn(
            "w-14 h-14 rounded-2xl items-center justify-center",
            bg
          )}
        >
          {icon}
        </View>
        <View>
          <Body className="font-bold text-lg text-surface-light mb-0.5">
            {title}
          </Body>
          <Caption className="text-xs text-zinc-500 font-medium">
            {subtitle}
          </Caption>
        </View>
      </View>
      <View className="items-end gap-0.5">
        <Body className="font-bold text-lg text-surface-light">{amount}</Body>
        <Caption className={cn("text-xs font-bold", changeColor)}>
          {change}
        </Caption>
      </View>
    </View>
  );
}
