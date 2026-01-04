import { cn } from "@/src/lib/utils";
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  label: string;
  loading?: boolean;
  className?: string;
  icon?: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  label,
  loading,
  className,
  disabled,
  icon,
  ...props
}: ButtonProps) {
  const baseStyles = "flex-row items-center justify-center rounded-full gap-2";

  const variants = {
    primary: "bg-primary text-dark",
    secondary: "bg-zinc-800",
    outline: "bg-transparent border border-zinc-700",
    ghost: "bg-transparent",
    danger: "bg-red-500/10 border border-red-500/20",
  };

  const sizes = {
    sm: "px-4 py-2",
    md: "px-6 py-3",
    lg: "px-8 py-4",
  };

  const textStyles = {
    primary: "text-zinc-900 font-bold",
    secondary: "text-white font-medium",
    outline: "text-white font-medium",
    ghost: "text-zinc-400 font-medium",
    danger: "text-red-400 font-medium",
  };

  return (
    <TouchableOpacity
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        disabled && "opacity-50",
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color={variant === "primary" ? "black" : "white"} />
      ) : (
        <>
          {icon}
          <Text className={cn(textStyles[variant])}>{label}</Text>
        </>
      )}
    </TouchableOpacity>
  );
}
