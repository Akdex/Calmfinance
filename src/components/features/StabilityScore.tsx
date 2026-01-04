import { Card } from "@/src/components/ui/Card";
import { Caption, H1, H2, Subtitle } from "@/src/components/ui/Typography";
import { cn } from "@/src/lib/utils";
import { useFinancialStore } from "@/src/store/useFinancialStore";
import { Info } from "lucide-react-native";
import { View } from "react-native";
import { useShallow } from "zustand/react/shallow";

export function StabilityScore() {
  const stabilityScore = useFinancialStore(
    useShallow((state) => state.profile.stabilityScore)
  );

  // Determine color based on score
  const getColor = (score: number) => {
    if (score >= 80) return "bg-primary";
    if (score >= 50) return "bg-yellow-400";
    return "bg-red-400";
  };

  const scoreColor = getColor(stabilityScore);

  return (
    <Card
      variant="prominent"
      className="items-center py-6 border-white/5 bg-surface-dark overflow-hidden relative"
    >
      {/* Background Glows */}
      <View className="absolute top-0 right-0 w-64 h-64 bg-primary opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <View className="absolute bottom-0 left-0 w-48 h-48 bg-accent-purple opacity-10 blur-3xl rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <View className="w-full flex-row justify-between items-start mb-4 z-10">
        <View>
          <H2 className="text-lg font-bold text-surface-light mb-0">
            Financial Stability
          </H2>
          <Caption className="text-text-dim text-xs mt-1 max-w-[200px]">
            Not a credit score. This measures your overall financial resilience.
          </Caption>
        </View>
        <View className="p-2 rounded-full active:bg-white/5">
          <Info size={20} color="#9CA3AF" />
        </View>
      </View>

      <View className="flex-row items-baseline mb-6 z-10 w-full justify-start">
        <H1 className="text-5xl font-bold text-surface-light">
          {stabilityScore}
        </H1>
        <Subtitle className="ml-2 text-xl text-text-dim">/ 100</Subtitle>
      </View>

      {/* Progress Bar Container */}
      <View className="w-full h-4 bg-zinc-100 dark:bg-black/40 rounded-full overflow-hidden mb-4 relative z-10">
        <View
          className={cn(
            "h-full rounded-full shadow-lg shadow-primary/30",
            scoreColor
          )}
          style={{ width: `${stabilityScore}%` }}
        />
        {/* Markers */}
        <View className="absolute top-0 left-[33%] w-0.5 h-full bg-white/30" />
        <View className="absolute top-0 left-[66%] w-0.5 h-full bg-white/30" />
      </View>

      <View className="flex-row items-center w-full z-10">
        <View className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse" />
        <Caption className="text-zinc-300 text-sm">
          {stabilityScore >= 80 ? "Excellent work!" : "Doing well. Add "}
          <Caption className="text-primary-dim font-bold">Insurance</Caption> to
          improve.
        </Caption>
      </View>
    </Card>
  );
}
