import { cn } from "@/src/lib/utils";
import { View, ViewProps } from "react-native";

interface CardProps extends ViewProps {
  variant?: "prominent" | "neutral" | "outline" | "glass";
  className?: string;
}

export function Card({
  variant = "neutral",
  className,
  children,
  ...props
}: CardProps) {
  const baseStyles = "rounded-3xl p-5 mb-4";

  const variants = {
    prominent:
      "bg-surface-dark border border-white/5 shadow-lg shadow-black/50",
    neutral: "bg-surface-dark border border-white/5 shadow-sm",
    outline: "bg-transparent border border-white/10",
    glass: "bg-white/5 border border-white/5",
  };

  return (
    <View className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </View>
  );
}
